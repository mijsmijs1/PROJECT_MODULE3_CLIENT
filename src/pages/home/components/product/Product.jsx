import React, { useState } from "react";
import { convertToVND, randomId, createBuyAnimation } from '@mieuteacher/meomeojs';
import "./product.scss"
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
export default function Product({ productStore }) {
    const navigate = useNavigate();
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
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
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                // showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                {productStore.data?.map(i => {
                                    if (i.categoryId == 3 && i?.status) {
                                        return (<>
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
                                        </>)
                                    }
                                })}
                            </Carousel>;
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
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                // showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                {productStore.data?.map(i => {
                                    if (i.categoryId == 1 && i?.status) {
                                        return (<>
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
                                        </>)
                                    }
                                })}
                            </Carousel>;
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
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                // showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                {productStore.data?.map(i => {
                                    if (i.categoryId == 2 && i?.status) {
                                        return (<>
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
                                        </>)
                                    }
                                })}
                            </Carousel>;
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
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                // showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                {productStore.data?.map(i => {
                                    if (i.categoryId == 4 && i?.status) {
                                        return (<>
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
                                        </>)
                                    }
                                })}
                            </Carousel>;
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
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                // showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                {productStore.data?.map(i => {
                                    if (i.categoryId == 5 && i?.status) {
                                        return (<>
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
                                        </>)
                                    }
                                })}
                            </Carousel>;
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
