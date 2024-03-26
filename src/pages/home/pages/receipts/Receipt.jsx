import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Table, Modal, Button } from 'react-bootstrap';
import { randomId } from '@mieuteacher/meomeojs';
import { convertToVND, createBuyAnimation } from '@mieuteacher/meomeojs';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import './receipt.scss'
export default function Receipt() {
  const [display, setDisplay] = useState(false)
  const [currentRecreipt, setCurrentRecreipt] = useState(null)
  const receiptStore = useSelector(store => store.receiptStore)
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Ho_Chi_Minh' // Múi giờ Việt Nam (GMT+7)
  };
  useEffect(
    () => {

    }
    , [receiptStore.receipts])

  return (
    <div className='receipt_page'>
      <div className='title'>
        <h1>HÓA ĐƠN</h1>
      </div>
      <MDBTable striped bordered hover align='middle'  >
        <MDBTableHead>
          <tr>
            <th scope='col'>Số thứ tự</th>
            <th scope='col'>Mã số hóa đơn</th>
            <th scope='col'>Tổng đơn hàng</th>
            <th scope='col'>Phương thức thanh toán</th>
            <th scope='col'>Tình trạng</th>
            <th scope='col'>Thời gian</th>
            <th scope='col'>Chi tiết đơn hàng</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {
            receiptStore.receipts?.map((receipt, index) => {
              if (receipt.status != "delete") {
                return (<tr key={randomId()}>
                  <td>{index + 1}</td>
                  <td>#PHUQUY-DK112{receipt.id}</td>
                  <td>{convertToVND(receipt.total)}</td>
                  <td>{receipt.payMode == 'cash' ? 'Thanh toán khi nhận hàng' : 'Zalo Pay'}</td>
                  <td>
                    <MDBBadge color={receipt.paid == true ? 'success' : 'danger'} pill>
                      {receipt.paid == true ? 'Đã thanh toán' : 'Chưa thanh toán'}
                    </MDBBadge>

                  </td>
                  <td>{receipt.paidAt ? (new Date(Number(receipt.paidAt))).toLocaleString('en-GB', options) : (new Date(Number(receipt.pending))).toLocaleString('en-GB', options)}</td>
                  <td>
                    <button className='btn btn-primary'
                      onClick={() => {
                        setDisplay(true);
                        setCurrentRecreipt(receipt.detail)

                      }}
                    >Show more!</button>
                  </td>
                </tr>)
              }
            })
          }
        </MDBTableBody>
      </MDBTable >

      {receiptStore.receipts.find(item => item.status == "delete") && (
        <>
          <div className='title'><h1>HÓA ĐƠN ĐÃ HỦY</h1></div>
          <MDBTable striped bordered hover align='middle'  >

            <MDBTableHead>
              <tr>
                <th scope='col'>Số thứ tự</th>
                <th scope='col'>Mã số hóa đơn</th>
                <th scope='col'>Tổng đơn hàng</th>
                <th scope='col'>Phương thức thanh toán</th>
                <th scope='col'>Tình trạng</th>
                <th scope='col'>Thời gian hủy đơn</th>
                <th scope='col'>Chi tiết đơn hàng</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {
                receiptStore.receipts?.map((receipt, index) => {
                  if (receipt.status == "delete") {
                    return (<tr key={randomId()}>
                      <td>{index + 1}</td>
                      <td>#PHUQUY-DK112{receipt.id}</td>
                      <td>{convertToVND(receipt.total)}</td>
                      <td>{receipt.payMode == 'cash' ? 'Thanh toán khi nhận hàng' : 'Zalo Pay'}</td>
                      <td>
                        <MDBBadge color={receipt.paid == true ? 'success' : 'danger'} pill>
                          Đã hủy đơn
                        </MDBBadge>

                      </td>
                      <td>{(new Date(Number(receipt.updateAt))).toLocaleString('en-GB', options)}</td>
                      <td>
                        <button className='btn btn-primary'
                          onClick={() => {
                            setDisplay(true);
                            setCurrentRecreipt(receipt.detail)

                          }}
                        >Show more!</button>
                      </td>
                    </tr>)
                  }
                })
              }
            </MDBTableBody>
          </MDBTable ></>)}
      <Modal
        show={display}
        onHide={() => setDisplay(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thông tin hóa đơn của bạn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='item_container_title'>
            <p>Hình ảnh</p>
            <p>Tên sản phẩm</p>
            <p>Giá tiền</p>
            <p>Số lượng</p>
          </div>
          {
            currentRecreipt?.map(item => {

              return (
                <div className='item_container'>
                  <img src={item?.product.avatar} />
                  <p>{item.product.name}</p>
                  <p>{convertToVND(item.product.price)}</p>
                  <p>{item.quantity}</p>
                </div>
              )

            }
            )
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setDisplay(false)}>OK</Button>
        </Modal.Footer>
      </Modal>
      <div className="advertising">
        <div className="advertising_content">
          <div className="left">
            <img src="https://lh3.googleusercontent.com/-9ozLDpM53-waJ2X8kd9Ei2DSmkc0lkQQ6NpWz9XG6Jrf8emdRzM5oiQmW1mn3nbuRPvEX8G-97qCmP6KXBQDaJHWCtX5HiV=w616-rw" />
          </div>
          <div className="right">
            <img src="https://lh3.googleusercontent.com/PPOZdVzA5tRaqoq2pIMOMJ3RBY8wLfYqqgqCK_LEcN7xrOeZ2bzD6TXgmuDYBhqTfbSeoxuGRkUhOmqrv5XIgkFkR2MYtnsLfQ=w616-rw" alt="" />
          </div>
        </div>
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
  )
}
