import React, { useState } from "react";
import Carousel from 'better-react-carousel'
import { convertToVND, randomId, createBuyAnimation } from '@mieuteacher/meomeojs';
import "./product.scss"
import { useNavigate } from "react-router-dom";
export default function Product({ productStore }) {
    const navigate = useNavigate();
    return (
        <>
            <div className='container'>
                <div className='product'>
                    <div className='product_info'>
                        <div className="top">
                            <h5>ĐIỆN THOẠI</h5>
                            <h5>Xem thêm </h5>
                        </div>
                        <div className="bottom">
                            <Carousel cols={5} rows={1} gap={20} loop>
                                {productStore.data?.map(i => {
                                    if (i.categoryId == 3 && i?.status) {
                                        return (<Carousel.Item>
                                            <div className="container_item">
                                                <div className="img_container">
                                                    <img width="100%" src={i.avatar} />
                                                </div>
                                                <div className="content_container">
                                                    <p>Phone</p>
                                                    <h6>{i.name}</h6>
                                                    <h5>{convertToVND(i.price)}</h5>
                                                    <button
                                                        onClick={() => {
                                                            navigate(`/product-info/${i.id}`)
                                                        }}
                                                        className="my-button">
                                                        Show more!
                                                    </button>
                                                </div>
                                            </div>
                                        </Carousel.Item>)
                                    }
                                })}
                            </Carousel>
                        </div>
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
            <div className='container'>
                <div className='product'>
                    <div className='product_info'>
                        <div className="top">
                            <h5>LAPTOP</h5>
                            <h5>Xem thêm </h5>
                        </div>
                        <div className="bottom">
                            <Carousel cols={5} rows={1} gap={20} loop>
                                {productStore.data?.map(i => {
                                    if (i.categoryId == 1 && i?.status) {
                                        return (<Carousel.Item>
                                            <div className="container_item">
                                                <div className="img_container">
                                                    <img width="100%" src={i.avatar} />
                                                </div>
                                                <div className="content_container">
                                                    <p>Phone</p>
                                                    <h6>{i.name}</h6>
                                                    <h5>{convertToVND(i.price)}</h5>
                                                    <button
                                                        onClick={() => {
                                                            navigate(`product-info/${i.id}`)
                                                        }}
                                                        className="my-button">
                                                        Show more!
                                                    </button>
                                                </div>
                                            </div>
                                        </Carousel.Item>)
                                    }
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
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
            <div className='container'>
                <div className='product'>
                    <div className='product_info'>
                        <div className="top">
                            <h5>PC</h5>
                            <h5>Xem thêm </h5>
                        </div>
                        <div className="bottom">
                            <Carousel cols={5} rows={1} gap={20} loop>
                                {productStore.data?.map(i => {
                                    if (i.categoryId == 2 && i?.status) {
                                        return (<Carousel.Item>
                                            <div className="container_item">
                                                <div className="img_container">
                                                    <img width="100%" src={i.avatar} />
                                                </div>
                                                <div className="content_container">
                                                    <p>Phone</p>
                                                    <h6>{i.name}</h6>
                                                    <h5>{convertToVND(i.price)}</h5>
                                                    <button className="my-button"
                                                        onClick={() => {
                                                            navigate(`/product-info/${i.id}`)
                                                        }}>
                                                        Show more!
                                                    </button>
                                                </div>
                                            </div>
                                        </Carousel.Item>)
                                    }
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='product'>
                    <div className='product_info'>
                        <div className="top">
                            <h5>THIẾT BỊ ÂM THANH</h5>
                            <h5>Xem thêm </h5>
                        </div>
                        <div className="bottom">
                            <Carousel cols={5} rows={1} gap={20} loop>
                                {productStore.data?.map(i => {
                                    if (i.categoryId == 4 && i?.status) {
                                        return (<Carousel.Item>
                                            <div className="container_item">
                                                <div className="img_container">
                                                    <img width="100%" src={i.avatar} />
                                                </div>
                                                <div className="content_container">
                                                    <p>Phone</p>
                                                    <h6>{i.name}</h6>
                                                    <h5>{convertToVND(i.price)}</h5>
                                                    <button className="my-button"
                                                        onClick={() => {
                                                            navigate(`/product-info/${i.id}`)
                                                        }}>
                                                        Show more!
                                                    </button>
                                                </div>
                                            </div>
                                        </Carousel.Item>)
                                    }
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
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
            <div className='container'>
                <div className='product'>
                    <div className='product_info'>
                        <div className="top">
                            <h5>PHỤ KIỆN</h5>
                            <h5>Xem thêm </h5>
                        </div>
                        <div className="bottom">
                            <Carousel cols={5} rows={1} gap={20} loop>
                                {productStore.data?.map(i => {
                                    if (i.categoryId == 5 && i?.status) {
                                        return (<Carousel.Item>
                                            <div className="container_item">
                                                <div className="img_container">
                                                    <img width="100%" src={i.avatar} />
                                                </div>
                                                <div className="content_container">
                                                    <p>Phone</p>
                                                    <h6>{i.name}</h6>
                                                    <h5>{convertToVND(i.price)}</h5>
                                                    <button className="my-button"
                                                        onClick={() => {
                                                            navigate(`/product-info/${i.id}`)
                                                        }}>
                                                        Show more!
                                                    </button>
                                                </div>
                                            </div>
                                        </Carousel.Item>)
                                    }
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
