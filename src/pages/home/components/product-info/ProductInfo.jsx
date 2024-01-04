import React, { useEffect, useState } from 'react';
import './productinfo.scss'
import { useSelector, useDispatch } from 'react-redux';
import { convertToVND, randomId, createBuyAnimation } from '@mieuteacher/meomeojs';
import { useParams, useNavigate } from 'react-router-dom'
import api from '@services/apis'
import { Modal } from 'antd';
import { receiptAction } from '@slices/receipt.slice'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
export default function ProductInfo() {
  const computerType = ['Laptop', 'PC & phụ kiện']
  const phoneType = ['Điện thoại & phụ kiện']
  let product = null
  let detail = null
  useEffect(() => {

  }, [])
  const productStore = useSelector(store => store.productStore)
  const categoryStore = useSelector(store => store.categoryStore)
  let { id } = useParams()
  product = productStore.data?.filter(item => item.id == id)
  detail = JSON.parse(product[0].detail)
  const [mainImage, setMainImage] = useState(product[0]?.pictures[0]?.url);
  const [showInfo, setShowInfo] = useState(false);
  const handleThumbnailHover = (thumbnailPath) => {
    setMainImage(thumbnailPath);
  };
  const dispatch = useDispatch()
  const { categoryName } = useParams()
  const navigate = useNavigate()
  useEffect(() => {

  }, [categoryName])
  async function handleAddToCart(productId, quantity, e) {
    try {
      let item = {
        productId,
        quantity
      }
      let result = await api.receipt.addToCart(item);

      // let cartEl = document.querySelector(".fa-bag-shopping");
      // let productEl = e.target.parentNode.parentNode.parentNode.querySelector('img');
      // createBuyAnimation(productEl, cartEl, 50, 50)

      dispatch(receiptAction.setCart(result.data.data))
    } catch (err) {
      Modal.error({
        title: 'Error',
        content: err.response?.data?.message,
        onOk: () => {

        }
      })
      console.log('err', err);
    }
  }
  return (
    <div className='product_info_container'>
      <div className='product_info'>
        <div className='product_info_img'>
          <div className='img_show'>
            <div className="image-gallery">
              <div className="main-image">
                <img src={mainImage} alt="Main Image" />
              </div>
              <div className="thumbnail-images">
                {product[0]?.pictures?.map(item => {
                  return (
                    <div className="thumbnail" onMouseEnter={() => handleThumbnailHover(item.url)}>
                      <img src={item.url} alt="Thumbnail 1" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="dashed">
            <div className="dashed-line"></div>
          </div>
          <div className='img_info'>
            <ul>
              <li>- CPU: Apple M2</li>
              <li>- Màn hình: 15.3" (2880 x 1864) Liquid Retina</li>
              <li>- RAM: 8GB / 512GB SSD</li>
              <li>- Hệ điều hành: macOS</li>
              <li>- Pin: 53 Wh</li>
            </ul>
          </div>
        </div>
        <div className='info_detail'>
          <div className='name'>
            <h4>{product[0]?.name}</h4>
            <p>Kiểu loại: Đang cập nhật </p>
          </div>
          <div className="dashed">
            <div className="dashed-line"></div>
          </div>

          <div className='detail'>
            <p>Màu sắc: đang cập nhật</p>
            <button>Màu sắc</button>
            <h5>{convertToVND(product[0]?.price)}</h5>
          </div>
          <div className="dashed">
            <div className="dashed-line"></div>
          </div>
          <div className='checkout'>
            <div className='voucher'>
              <p>Chọn một trong những khuyến mãi sau:</p>
              <img src='https://lh3.googleusercontent.com/fA0DLuzzZLQjQvCnFmY1fHHP1m-qS69FF57aCYyVEYOM_3268ysiBv8gVFESDNwDm-aK2yXMs9qnTE6CDCigOf1njmHJFKM=rw-w0' />
            </div>

            <button
              onClick={(e) => {
                handleAddToCart(product[0]?.id, 1, e)
                Modal.success({
                  title: "Notication",
                  content: "Sản phẩm đã được thêm vào giỏ hàng của bạn!",
                  onOk() { }
                })
              }}>
              Mua ngay! <div className="star-1">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd"
                  }}
                  version="1.1"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      className="fil0"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-2">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd"
                  }}
                  version="1.1"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      className="fil0"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-3">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd"
                  }}
                  version="1.1"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      className="fil0"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-4">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd"
                  }}
                  version="1.1"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      className="fil0"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-5">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd"
                  }}
                  version="1.1"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      className="fil0"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-6">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 784.11 815.53"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd"
                  }}
                  version="1.1"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      className="fil0"
                    />
                  </g>
                </svg>
              </div>
            </button>
          </div>
          <div className="dashed">
            <div className="dashed-line"></div>
          </div>
          <div className="BOXKHUYENMAILIENQUAN css-1rggx5t">
            <div className="css-mz7xyg">Khuyến mãi liên quan</div>
            <ul>
              <li>
                <span>
                  Giảm thêm đến 200.000đ dành cho Học sinh - sinh viên (không áp dụng với
                  CPU, Apple và thẻ cào).
                </span>
                <a
                  href="https://phongvu.vn/p/chuong-trinh-khuyen-mai-phong-vu"
                  target="blank"
                  className="css-1ty6934"
                >
                  Xem chi tiết
                </a>
              </li>
              <li>
                <span>
                  Ưu đãi trả góp: Lãi suất chỉ 0.99%, trả trước từ 0% giá trị sản phẩm
                </span>
                <a
                  href="https://phongvu.vn/cong-nghe/cach-mua-hang-tra-gop-tai-phong-vu/"
                  target="blank"
                  className="css-1ty6934"
                >
                  Xem chi tiết
                </a>
              </li>
              <li>
                <span>
                  Nhập mã <strong> QRPV9</strong> <br /> - Giảm{" "}
                  <span style={{ color: "rgb(237, 33, 1)", fontWeight: 500 }}>
                    50.000đ{" "}
                  </span>{" "}
                  cho đơn từ 2,500,000đ <br /> - Giảm{" "}
                  <span style={{ color: "rgb(237, 33, 1)", fontWeight: 500 }}>
                    100.000đ{" "}
                  </span>{" "}
                  cho đơn từ 5,000,000đ <br /> - Giảm{" "}
                  <span style={{ color: "rgb(237, 33, 1)", fontWeight: 500 }}>
                    350.000đ{" "}
                  </span>{" "}
                  cho đơn từ 15,000,000đ
                  <br /> khi thanh toán qua VNPAY-QR.
                </span>
                <a
                  href="https://phongvu.vn/cong-nghe/uu-dai-vnpay/"
                  target="blank"
                  className="css-1ty6934"
                >
                  Xem chi tiết
                </a>
              </li>
              <li>
                <span>
                  Nhập mã <strong> PVZLP200</strong> giảm thêm đến{" "}
                  <span style={{ color: "rgb(237, 33, 1)", fontWeight: 500 }}>
                    200.000đ{" "}
                  </span>{" "}
                  khi thanh toán qua ZaloPay
                </span>
                <a
                  href="https://phongvu.vn/cong-nghe/uu-dai-thanh-toan-zalopay/"
                  target="blank"
                  className="css-1ty6934"
                >
                  Xem chi tiết
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className='info'>
        <div className='company'>
          <img src='/src/pictures/logo.jpg'></img>
          <p>CÔNG TY MỘT THÀNH VIÊN PHÚ QUÝ</p>
          <svg
            fill="currentColor"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 477.867 477.867"
            size={14}
            className="css-1ptts6n"
            color="green"
            height={14}
            width={14}
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: 8, marginBottom: 4 }}
          >
            <g>
              <g>
                <path
                  d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933
			C477.726,107.033,370.834,0.141,238.933,0z M370.466,165.666L199.799,336.333c-6.665,6.663-17.468,6.663-24.132,0l-68.267-68.267
			c-6.78-6.548-6.968-17.352-0.42-24.132c6.548-6.78,17.352-6.968,24.132-0.42c0.142,0.138,0.282,0.277,0.42,0.42l56.201,56.201
			l158.601-158.601c6.78-6.548,17.584-6.36,24.132,0.419C376.854,148.567,376.854,159.052,370.466,165.666z"
                />
              </g>
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </div>
        <div className='policy'>
          <h5>Chính sách bán hàng</h5>
          <img src='https://lh3.googleusercontent.com/uvWBg1q90XtEWvHkWGDbDemjEaANJ_kX3NEfIywURPTMeaSZTORdttpehuFBNKpYiWQ3jHgito4ciCt9pEJIHH1V4IlPYoE=rw'></img><span>Miễn phí giao hàng cho đơn hàng từ 5 triệu</span><br />
          <img src='https://lh3.googleusercontent.com/LT3jrA76x0rGqq9TmqrwY09FgyZfy0sjMxbS4PLFwUekIrCA9GlLF6EkiFuKKL711tFBT7f2JaUgKT3--To8zOW4kHxPPHs4=rw'></img><span>Cam kết hàng chính hãng 100% </span>
        </div>
        <div className='detail_product_info'>
          <h5>Cấu hình chi tiết</h5>
          <MDBTable striped>
            <MDBTableBody>
              {detail.brand &&
                <tr>
                  <th scope='row'>Brand</th>
                  <td>{detail.brand}</td>
                </tr>}
              {detail.category &&
                <tr>
                  <th scope='row'>Category</th>
                  <td>{detail.category}</td>
                </tr>}
              {detail.name &&
                <tr>
                  <th scope='row'>Name</th>
                  <td>{detail.name}</td>
                </tr>}
              {detail.guarantee &&
                <tr>
                  <th scope='row'>Guarantee</th>
                  <td>{detail.guarantee}</td>
                </tr>}
              {detail.warrantyDes &&
                <tr>
                  <th scope='row'>Warranty Describle</th>
                  <td>{detail.warrantyDes}</td>
                </tr>}
              {detail.series &&
                <tr>
                  <th scope='row'>Series</th>
                  <td>{detail.series}</td>
                </tr>}
              {detail.partNum &&
                <tr>
                  <th scope='row'>Part-number</th>
                  <td>{detail.partNum}</td>
                </tr>}

            </MDBTableBody>
          </MDBTable>
          <div className='product_more_container'>
            <div className='product_info_more' onClick={() => {
              setShowInfo(!showInfo)
            }}>See more content <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
          </div>
        </div>
      </div>
      {
        showInfo &&
        <div className='product_info_container' >
          <div className='product_info_background' onClick={() => { setShowInfo(!showInfo) }}></div>
          <div className='product_info_content'>
            <h5>Cấu hình chi tiết</h5>
            {
              computerType.find(item => item == product[0]?.category.title) && <MDBTable striped>
                <MDBTableBody>
                  {detail.brand &&
                    <tr>
                      <th scope='row'>Brand</th>
                      <td>{detail.brand}</td>
                    </tr>}
                  {detail.category &&
                    <tr>
                      <th scope='row'>Category</th>
                      <td>{detail.category}</td>
                    </tr>}
                  {detail.name &&
                    <tr>
                      <th scope='row'>Name</th>
                      <td>{detail.name}</td>
                    </tr>}
                  {detail.guarantee &&
                    <tr>
                      <th scope='row'>Guarantee</th>
                      <td>{detail.guarantee}</td>
                    </tr>}
                  {detail.warrantyDes &&
                    <tr>
                      <th scope='row'>Warranty Describle</th>
                      <td>{detail.warrantyDes}</td>
                    </tr>}
                  {detail.series &&
                    <tr>
                      <th scope='row'>Series</th>
                      <td>{detail.series}</td>
                    </tr>}
                  {detail.partNum &&
                    <tr>
                      <th scope='row'>Part-number</th>
                      <td>{detail.partNum}</td>
                    </tr>}
                  {detail.color &&
                    <tr>
                      <th scope='row'>Color</th>
                      <td>{detail.color}</td>
                    </tr>}
                  {detail.demand &&
                    <tr>
                      <th scope='row'>Demand</th>
                      <td>{detail.demand}</td>
                    </tr>}
                  <tr>
                    <th colSpan={2}>Detailed configuration</th>

                  </tr>
                  {detail.CPUgen &&
                    <tr>
                      <th scope='row'>CPU generation</th>
                      <td>{detail.CPUgen}</td>
                    </tr>}
                  {detail.CPU &&
                    <tr>
                      <th scope='row'>CPU</th>
                      <td>{detail.CPU}</td>
                    </tr>}
                  {detail.graphic &&
                    <tr>
                      <th scope='row'>Graphics chips</th>
                      <td>{detail.graphic}</td>
                    </tr>}
                  {detail.RAM &&
                    <tr>
                      <th scope='row'>RAM</th>
                      <td>{detail.RAM}</td>
                    </tr>}
                  {detail.screen &&
                    <tr>
                      <th scope='row'>Screen</th>
                      <td>{detail.screen}</td>
                    </tr>}
                  {detail.storage &&
                    <tr>
                      <th scope='row'>Storage</th>
                      <td>{detail.storage}</td>
                    </tr>}
                  {detail.storagePort &&
                    <tr>
                      <th scope='row'>Maximum number of storage ports</th>
                      <td>{detail.storagePort}</td>
                    </tr>}
                  {detail.M2Port &&
                    <tr>
                      <th scope='row'>M.2 slot type supported</th>
                      <td>{detail.M2Port}</td>
                    </tr>}
                  {detail.outputPort &&
                    <tr>
                      <th scope='row'>Output port</th>
                      <td>{detail.outputPort}</td>
                    </tr>}
                  {detail.connector &&
                    <tr>
                      <th scope='row'>Connector</th>
                      <td>{detail.connector}</td>
                    </tr>}
                  {detail.wireless &&
                    <tr>
                      <th scope='row'>Wireless Connectivity</th>
                      <td>{detail.wireless}</td>
                    </tr>}
                  {detail.keyboard &&
                    <tr>
                      <th scope='row'>Keyboard</th>
                      <td>{detail.keyboard}</td>
                    </tr>}
                  {detail.system &&
                    <tr>
                      <th scope='row'>Operating system</th>
                      <td>{detail.system}</td>
                    </tr>}
                  {detail.size &&
                    <tr>
                      <th scope='row'>Size</th>
                      <td>{detail.size}</td>
                    </tr>}
                  {detail.battery &&
                    <tr>
                      <th scope='row'>The battery</th>
                      <td>{detail.battery}</td>
                    </tr>}
                  {detail.mass &&
                    <tr>
                      <th scope='row'>Mass</th>
                      <td>{detail.mass}</td>
                    </tr>}
                  <tr>
                    <th colSpan={2}>Other information</th>

                  </tr>
                  <tr>
                    <th colSpan={2}>Size information</th>

                  </tr>
                </MDBTableBody>
              </MDBTable>
            }
            {
              phoneType.find(item => item == product[0]?.category.title) && <MDBTable striped>
                <MDBTableBody>
                  {detail.brand &&
                    <tr>
                      <th scope='row'>Brand</th>
                      <td>{detail.brand}</td>
                    </tr>}
                  {detail.category &&
                    <tr>
                      <th scope='row'>Category</th>
                      <td>{detail.category}</td>
                    </tr>}
                  {detail.name &&
                    <tr>
                      <th scope='row'>Name</th>
                      <td>{detail.name}</td>
                    </tr>}
                  {detail.guarantee &&
                    <tr>
                      <th scope='row'>Guarantee</th>
                      <td>{detail.guarantee}</td>
                    </tr>}
                  {detail.warrantyDes &&
                    <tr>
                      <th scope='row'>Warranty Describle</th>
                      <td>{detail.warrantyDes}</td>
                    </tr>}
                  {detail.series &&
                    <tr>
                      <th scope='row'>Series</th>
                      <td>{detail.series}</td>
                    </tr>}
                  {detail.color &&
                    <tr>
                      <th scope='row'>Color</th>
                      <td>{detail.color}</td>
                    </tr>}

                  <tr>
                    <th colSpan={2}>Screen</th>

                  </tr>
                  {detail.screen &&
                    <tr>
                      <th scope='row'>Screen</th>
                      <td>{detail.screen}</td>
                    </tr>}
                  {detail.resolution &&
                    <tr>
                      <th scope='row'>Resolution</th>
                      <td>{detail.resolution}</td>
                    </tr>}

                  <tr>
                    <th colSpan={2}>Configuration</th>
                  </tr>

                  {detail.chip &&
                    <tr>
                      <th scope='row'>Chips</th>
                      <td>{detail.chip}</td>
                    </tr>}
                  {detail.storage &&
                    <tr>
                      <th scope='row'>Storage</th>
                      <td>{detail.storage}</td>
                    </tr>}
                  {detail.system &&
                    <tr>
                      <th scope='row'>Operating system</th>
                      <td>{detail.system}</td>
                    </tr>}
                  {detail.battery &&
                    <tr>
                      <th scope='row'>The battery</th>
                      <td>{detail.battery}</td>
                    </tr>}
                  {detail.batteryTech &&
                    <tr>
                      <th scope='row'>Battery technology</th>
                      <td>{detail.batteryTech}</td>
                    </tr>}
                  {detail.chargPort &&
                    <tr>
                      <th scope='row'>Charging port</th>
                      <td>{detail.chargPort}</td>
                    </tr>}
                  {detail.sim &&
                    <tr>
                      <th scope='row'>Sim type</th>
                      <td>{detail.sim}</td>
                    </tr>}

                  {detail.mobileNet &&
                    <tr>
                      <th scope='row'>Mobile network</th>
                      <td>{detail.mobileNet}</td>
                    </tr>}

                  <tr>
                    <th colSpan={2}>Camera</th>
                  </tr>

                  {detail.rearCam &&
                    <tr>
                      <th scope='row'>Rear camera</th>
                      <td>{detail.rearCam}</td>
                    </tr>}

                  {detail.fontCam &&
                    <tr>
                      <th scope='row'>Front camera</th>
                      <td>{detail.fontCam}</td>
                    </tr>}

                  <tr>
                    <th colSpan={2}>Connect</th>
                  </tr>

                  {detail.WIFI &&
                    <tr>
                      <th scope='row'>WIFI</th>
                      <td>{detail.WIFI}</td>
                    </tr>}

                  {detail.GPS &&
                    <tr>
                      <th scope='row'>GPS</th>
                      <td>{detail.GPS}</td>
                    </tr>}

                  {detail.bluetooth &&
                    <tr>
                      <th scope='row'>Bluetooth</th>
                      <td>{detail.bluetooth}</td>
                    </tr>}

                  {detail.headjack &&
                    <tr>
                      <th scope='row'>Headphone jack</th>
                      <td>{detail.headjack}</td>
                    </tr>}

                  <tr>
                    <th colSpan={2}>Connect</th>
                  </tr>
                  {detail.size &&
                    <tr>
                      <th scope='row'>Size</th>
                      <td>{detail.size}</td>
                    </tr>}
                  {detail.mass &&
                    <tr>
                      <th scope='row'>Mass</th>
                      <td>{detail.mass}</td>
                    </tr>}
                  <tr>
                    <th colSpan={2}>Other information</th>

                  </tr>
                  <tr>
                    <th colSpan={2}>Size information</th>

                  </tr>
                </MDBTableBody>
              </MDBTable>
            }

          </div>
        </div>
      }
    </div>
  )
}
