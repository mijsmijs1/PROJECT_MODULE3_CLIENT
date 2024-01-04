import React from 'react'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { productAction } from '../../../store/slices/product.slice'
import { userAction } from '../../../store/slices/user.slice'
import { categoryAction } from '../../../store/slices/category.slice'
import { brandAction } from '../../../store/slices/brand.slice'
import { useDispatch } from 'react-redux'
import { Dropdown } from 'react-bootstrap';
export default function Container({ menuState, userStore }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const menus = [
        {
            title: 'User',
            child: [
                {
                    title: "Add",
                    link: null,
                    fn: () => {
                        dispatch(userAction.loadModal())
                    }
                },
                {
                    title: "List",
                    link: "user/list",
                    fn: null
                },
                {
                    title: "Recycle",
                    link: "user/recycle",
                    fn: null
                }
            ]
        },
        {
            title: 'Product',
            child: [
                {
                    title: "Add",
                    link: null,
                    fn: () => {
                        dispatch(productAction.loadModal())
                    }
                },
                {
                    title: "List",
                    link: "product/list",
                    fn: null
                },
                {
                    title: "Recycle",
                    link: "product/recycle",
                    fn: null
                }
            ]
        },
        {
            title: 'Categories',
            child: [
                {
                    title: "Add",
                    link: null,
                    fn: () => {
                        dispatch(categoryAction.loadModal())
                    }
                },
                {
                    title: "List",
                    link: "category/list",
                    fn: null
                },
                {
                    title: "Recycle",
                    link: "category/recycle",
                    fn: null
                }
            ]
        },
        ,
        {
            title: 'Brands',
            child: [
                {
                    title: "Add",
                    link: null,
                    fn: () => {
                        dispatch(brandAction.loadModal())
                    }
                },
                {
                    title: "List",
                    link: "brand/list",
                    fn: null
                },
                {
                    title: "Recycle",
                    link: "brand/recycle",
                    fn: null
                }
            ]
        }
    ]
    return (
        <div className='admin_container'>
            <div className={`${menuState && "hidden"} menu_bar`}>
                <div className='user'>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">

                            <img src={userStore.data?.avatar} />
                            <span>Hi Admin <i class="fa-solid fa-chevron-down"></i></span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                {
                    menus.map(item => (
                        <div key={Date.now() * Math.random()} className='menu_item'>
                            <button onClick={(e) => {
                                let targetEl = e.target.parentNode.querySelector('.menu_item_sub');
                                if (targetEl.classList.length > 1) {
                                    targetEl.classList.remove("hidden")
                                } else {
                                    targetEl.classList.add("hidden")
                                }
                            }} className='my-button'>
                                <ion-icon name="grid-outline"></ion-icon> {item.title}
                            </button>
                            <ul className='menu_item_sub'>
                                {
                                    item.child?.map(supItem => (<li onClick={() => {
                                        if (supItem.fn) {
                                            supItem.fn()
                                        } else {
                                            navigate(supItem.link)
                                        }
                                    }} key={Date.now() * Math.random()}><i class="fa-regular fa-star"></i> {supItem.title}</li>))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
            <div className='content'>
                <div className='history'>
                    <span>Home</span>
                    <span>Admin</span>
                    <span>Product</span>
                </div>
                <div className='content_body'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
