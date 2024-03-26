import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import './cart.scss'
import { useSelector, useDispatch } from 'react-redux';
import { convertToVND, randomId } from '@mieuteacher/meomeojs';
import { Modal, QRCode } from 'antd';
import api from '@services/apis'
import { receiptAction } from '../../../../store/slices/receipt.slice';
export default function Cart() {
    const dispatch = useDispatch();
    const receiptStore = useSelector(store => store.receiptStore)
    useEffect(() => {

    }, [receiptStore.receipts])
    const userStore = useSelector(store => store.userStore)
    async function handleDelete(itemId) {
        try {
            Modal.confirm({
                title: "Confirm",
                content: "Bạn có chắc muốn xóa sản phẩm?",
                onOk: async () => {
                    let result = await api.receipt.delete(itemId);
                    dispatch(receiptAction.deleteItem(itemId));
                }
            })
        } catch (err) {

        }
    }

    let changeTimeout = null;
    async function handleChangeQuantity(itemId, e) {
        clearTimeout(changeTimeout)
        changeTimeout = setTimeout(async () => {
            try {
                let quantity = +e.target.value;
                await api.receipt.update({
                    itemId,
                    quantity
                })
                dispatch(receiptAction.updateItem({
                    itemId,
                    quantity
                }));
            } catch (err) { }
        }, 1000)
    }

    async function cash(payMode = "cash", zaloData = null) {
        try {
            let data = {
                total: receiptStore.cart?.detail?.reduce((total, cur) => {
                    return total += cur.quantity * cur.product.price
                }, 0) || 0,
                payMode
            }
            if (zaloData) {
                data = {
                    ...data,
                    ...zaloData
                }
            }

            let result = await api.receipt.pay(receiptStore.cart?.id, data)

            return result.data.data
        } catch (err) {
            return false
        }
    }

    const [qrData, setQrData] = useState(null)

    async function zalo() {
        try {
            let result = await api.receipt.zaloReceipt({
                receiptId: receiptStore.cart?.id,
                userName: userStore.data?.email,
                total: receiptStore.cart?.detail?.reduce((total, cur) => {
                    return total += cur.quantity * cur.product.price
                }, 0) || 0
            })
            setQrData(result.data)
            let zaloPayTimeout = null;
            let zaloPayInterVal = setInterval(async () => {
                let resultCheck = await api.receipt.zaloCheck(result.data.orderId);
            
                if (resultCheck.data.status) {
                    clearInterval(zaloPayInterVal)
                    clearTimeout(zaloPayTimeout)
                    setQrData(null)
                    let receiptNew = await cash("zalo_pay", {
                        paid: true,
                        paidAt: String(Date.now())
                    })

                    dispatch(receiptAction.setCart(null))
                    dispatch(receiptAction.addReceipt(receiptNew))
                    window.location.href = '/receipts'
                }
            }, 500)

            zaloPayTimeout = setTimeout(() => {
                setQrData(null)
                clearInterval(zaloPayInterVal)
            }, 2 * 60 * 1000)
        } catch (err) {
            return false
        }
    }

    async function handlePay(e) {
        e.preventDefault();
        Modal.confirm({
            title: 'Thanh toán',
            content: 'Xác nhận đặt hàng',
            okText: 'Thanh toán',
            cancelText: 'Hủy',
            onOk: async () => {
                let payMode = e.target.payMode.value;

                let result = null;

                if (payMode == "cash") {
                    result = await cash()
                }

                if (payMode == "zalo_pay") {
                    result = await zalo()
                    return
                }
                dispatch(receiptAction.setCart(null))
                dispatch(receiptAction.addReceipt(result))

                window.location.href = '/receipts'
            },
            onCancel: () => { return }
        })

    }
    return (
        <>
            <div className='cart_page'>
                <h3>Giỏ hàng của bạn (id: {receiptStore.cart?.id})</h3>
                <div className='cart_page_container'>

                    <div className='table_container'>
                        <Table striped bordered hover class="table align-middle">
                            <thead>
                                <tr>
                                    {/* <th >STT</th>
                        <th >Hình ảnh</th>
                        <th >Tên sản phẩm</th> */}
                                    <th colSpan={3}>Thông tin sản phẩm</th>
                                    <th>Đơn giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng đơn</th>
                                    <th>Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    receiptStore.cart?.detail?.map((item, index) => (
                                        <tr key={randomId()}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <img src={item.product.avatar} style={{ width: 50, height: 50, borderRadius: "50%" }} />
                                            </td>
                                            <td>{item.product.name}</td>
                                            <td>{convertToVND(item.product.price)}</td>
                                            <td>
                                                <input onChange={(e) => {
                                                    handleChangeQuantity(item.id, e)
                                                }} style={{ width: 60, textAlign: "center" }} type="number" min={1} defaultValue={item.quantity} />
                                            </td>
                                            <td>{convertToVND(item.product.price * item.quantity)}</td>
                                            <td>
                                                <button onClick={() => {
                                                    handleDelete(item.id)
                                                }} className='btn btn-danger'>Xóa!</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <td>{receiptStore.cart?.detail.length + 1}</td>
                                    <td style={{ fontWeight: "bold" }}>Tổng bill</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>{convertToVND(receiptStore.cart?.detail?.reduce((total, cur) => {
                                        return total += cur.quantity * cur.product.price
                                    }, 0) || 0)}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className='checkout_container'>
                        <div className='voucher'>
                            <p>Khuyến mãi</p>
                            <span>Đơn hàng chưa đủ điều kiện áp dụng khuyến mãi. Vui lòng mua thêm để áp dụng</span>
                        </div>
                        <div className='checkout'>
                            <h6>Thanh toán</h6>
                            <div className='current_total'>
                                <div>Tổng giá trị đơn:</div>
                                <p> {convertToVND(receiptStore.cart?.detail?.reduce((total, cur) => {
                                    return total += cur.quantity * cur.product.price
                                }, 0) || 0)}</p>
                            </div>
                            <div className='current_total'>
                                <p>Thành tiền:</p>
                                <span>{convertToVND(receiptStore.cart?.detail?.reduce((total, cur) => {
                                    return total += cur.quantity * cur.product.price
                                }, 0) || 0)}</span>
                            </div>
                            <form onSubmit={(e) => {
                                handlePay(e)
                            }}
                                style={{
                                    display: 'flex',
                                    flexDirection: "column",
                                    alignItems: "flex-end"
                                }}
                            >
                                <div className='pay_method'>
                                    <p>Phương thức thanh toán</p>
                                    <select style={{ width: "100px", marginBottom: "10px" }} name='payMode'>
                                        <option value="cash" defaultChecked>CASH</option>
                                        <option value="zalo_pay">ZALO PAY</option>
                                    </select>
                                </div>
                                <button style={{ width: "130px" }} className='my-button' type='submit'>Đặt Hàng</button>
                            </form>
                        </div>
                    </div>
                    {
                        qrData && (
                            Modal.success({
                                title: "Mã QR Code đã được tạo, vui lòng dùng ứng dụng Zalo Pay để quét và tiến hành thanh toán:",
                                onOk: () => { window.location.href = "/cart" },
                                content:
                                    <QRCode
                                        value={qrData.qrCodeUrl}
                                        icon="https://play-lh.googleusercontent.com/NfFBz1Rxk0nQ7RsOk0kXbi1AEp1ZJ3rzJHbwRlmheZEDPPHh7dscqyxyX-ehxTl7tw"
                                    />
                            })
                        )
                    }

                </div>
                <div className="advertising">
                    <div className="advertising_content">
                        <div className="left">
                            <img src="https://lh3.googleusercontent.com/r3RsNydCyi1E5-esEzeA_FrFRAeyvoJcTcJvqljst8zl9VtQr8klPBFlJIeSRox7wD9ICe4fsGs5Wp7wJ6V2CRHvHk8RAQi5=w616-rw" />
                        </div>
                        <div className="right">
                            <img src="https://lh3.googleusercontent.com/wtK6e3X2ZJusRAxbet522U7ZImj__ZGOgpURxGF_TLUtc4WBxjjKVbGJ-Ng4-NBIMOK2i9L4fadChVJ36qBs40GmKoaiAXEi=w616-rw" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
