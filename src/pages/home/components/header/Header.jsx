import React from 'react'
import './header.scss'
import pictures from '@/pictures'
import { useSelector, useDispatch } from 'react-redux'
import { Dropdown } from 'react-bootstrap';
import { userAction } from '@slices/user.slice'
import { Modal } from 'antd';
import { logout } from '@services/firebase'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const dispatch = useDispatch()
  const userStore = useSelector(store => store.userStore)
  const productStore = useSelector(store => store.productStore)

  const categoryStore = useSelector(store => store.categoryStore)

  const brandStore = useSelector(store => store.brandStore)

  const receiptStore = useSelector(store => store.receiptStore)
  const navigate = useNavigate()
  let icon = [
    {
      title: "Laptop",
      icon: "laptop-outline"
    },
    {
      title: "PC & phụ kiện",
      icon: "desktop-outline"
    },
    {
      title: "Điện thoại & phụ kiện",
      icon: "calculator-outline"
    },
    {
      title: "Thiết bị âm thanh",
      icon: "headset-outline"
    },
    {
      title: "Phụ kiện chung",
      icon: "game-controller-outline"
    }

  ]
  return (
    <>
      <div className='sup_header'>
        <div className='sup_header_content'>
          <img src="https://lh3.googleusercontent.com/_1IIdVmUpPTu90FMAIR66GKd5JxnBwUFTW526HgA1dRp3bo7pwuFJwuylI6dEDxOEiW3W72Eiuzs1LuRQ8NtBW3GSkxKSw=w1920-rw" alt="" />
        </div>
        <div className='sup_header_info'>
          <div className='info_container'>
            {
              [
                {
                  icon: "ticket-outline",
                  text: "khuyến mại"
                },
                {
                  icon: "location-outline",
                  text: "Hệ thống cửa hàng"
                },
                {
                  icon: "bar-chart-outline",
                  text: "Tư vấn doanh nghiệp"
                },
                {
                  icon: "call-outline",
                  text: "Liên hệ"
                },
                {
                  icon: "desktop-outline",
                  text: "Hỗ trợ build máy"
                }
              ].map((item, index) => (
                <div key={index}>
                  <ion-icon name={item.icon}></ion-icon>
                  <span>{item.text}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <header>
        <div className='header_content'>
          <div className='left'>
            <div className='logo_box'>
              <img src={pictures.logo} onClick={() => {
                window.location.href = "/";
              }} />
              <a href={import.meta.env.WEB_URL}><img src="https://images.cooltext.com/5681142.png" width="401" height="97" alt="PHUQUY.VN" /></a>
            </div>
            <nav>
              {

                categoryStore.data?.map(item => {
                  if (item.status) {
                    return (
                      <div style={{ zIndex: 100 }}
                        className={`item ${item.codeName && "sup"}`} key={Date.now() * Math.random()}>
                        <ion-icon name={icon.find(currentIcon => currentIcon.title == item.title) ? icon.find(currentIcon => currentIcon.title == item.title).icon : "game-controller-outline"}></ion-icon>
                        <div
                          style={{ zIndex: 9999 }}
                          onClick={() => {
                            navigate(`/category/${item.title}/all`)
                          }}>
                          <span>{item.title}</span>
                        </div>

                        {
                          brandStore.data && (
                            <div className='sup_menu'>
                              {
                                brandStore.data?.map(supItem => {
                                  try {
                                    if (productStore.data.find(currentProduct => currentProduct.categoryId == item.id && currentProduct.brandId == supItem.id) && supItem.status) {
                                      return (
                                        <div onClick={() => {
                                          navigate(`/category/${item.title}/${supItem.title}`)
    
                                        }}
                                          key={Date.now() * Math.random()}
                                          className='sup_menu_item'>
                                          {supItem.title}
                                        </div>
                                      )
                                    }
                                  } catch (err) {
                                    console.log(err);
                                  }
                                }
                                )
                              }
                            </div>
                          )
                        }
                      </div>
                    )
                  }
                })
              }
            </nav>
          </div>
          <div className='right'>
            <i className="item fa-solid fa-magnifying-glass"></i>
            <div className='cart_box'>
              <ion-icon name="cart-outline"
                onClick={() => {
                  navigate("/cart")
                }}
              ></ion-icon>
              <span>
                ({
                  receiptStore.cart?.detail?.reduce((total, cur) => {
                    return total + cur.quantity
                  }, 0) || 0
                })
              </span>
            </div>
            {
              userStore.data ? (
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <div className='user_box'>
                      <span>Hi {isNaN(Number(userStore.data.userName)) ? userStore.data.userName : userStore.data.email.split('@')[0]}!</span>
                      <img src={userStore.data.avatar} />
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => {
                      window.location.href = "/admin"
                    }}>Admin</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                    <Dropdown.Item onClick={() => {
                      window.location.href = "/receipts"
                    }}>Receipts</Dropdown.Item>
                    <Dropdown.Item onClick={() => {
                      Modal.confirm({
                        title: "Xác nhận",
                        content: "Bạn chắc chắn muốn đăng xuất!",
                        onOk: async () => {
                          await logout()
                          localStorage.removeItem("token")
                          dispatch(userAction.setData(null))
                        }
                      })
                    }}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <div onClick={() => {
                  window.location.href = '/authen';
                }} className='user_authentication'>
                  Register/ Login
                </div>
              )
            }
            <div className='multiple_language'>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className='item'>
                    <img src={pictures.flagVN} />
                    <b>VN</b>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <div className='item'>
                      <img src={pictures.flagVN} />
                      <span>VN</span>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
