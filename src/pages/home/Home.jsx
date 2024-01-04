import React, { useEffect } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Product from './components/product/Product';
import { useLocation } from 'react-router-dom';
import Carousel from './components/carousel/Carousel'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { productAction } from '../../store/slices/product.slice';
import './home.scss'
export default function Home() {
  const productStore = useSelector(store => store.productStore)
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productAction.addData({
      id: Date.now() * Math.random(),
      name: "Iphone 16 pro max",
      price: "100000",
      des: "Mo ta san pham",
      avatar: "https://lh3.googleusercontent.com/6JWskyUenAsPyM4cWvfaUX9EIr5TScGuQY-zpamAVtsz5Bh096R_YfwpViednIEO4qC06y8Dl7blytLpxddzwLitouOdAnSS4g=w230-rw",
      pictures: ["https://lh3.googleusercontent.com/6JWskyUenAsPyM4cWvfaUX9EIr5TScGuQY-zpamAVtsz5Bh096R_YfwpViednIEO4qC06y8Dl7blytLpxddzwLitouOdAnSS4g=w230-rw"]
    }))
  }, [])

  return (
    <div className='home_page'>
      <Header></Header>
      <div className='home_page_body'>
        {isHomePage && <Carousel />}
        {isHomePage && <Product productStore={productStore} />}
        <div className='body_content'>
          <Outlet />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
