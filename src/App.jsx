import RouteIndex from './routes/RouteIndex'
import './main.scss'
import api from '@services/apis'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userAction } from '@slices/user.slice'
import { receiptAction } from '@slices/receipt.slice'
import { productAction } from './store/slices/product.slice'
import { categoryAction } from '@slices/category.slice'
import { brandAction } from '@slices/brand.slice'
import '../product.json'
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem("token")) return
    try {
      api.authen.decodeToken(localStorage.getItem("token"))
        .then(res => {
          dispatch(userAction.setData(res.data.data))
        })
        .catch(err => {
          console.log(err);
          localStorage.removeItem("token")
          dispatch(userAction.setData(null))
        })
    } catch (err) {
      console.log(err);
      localStorage.removeItem("token")
      dispatch(userAction.setData(null))
    }
  }, [])


  useEffect(() => {
    // if (!localStorage.getItem("token")) return
    try {
      api.product.findMany()
        .then(async (res) => {
          dispatch(productAction.setData(res.data.data))
        })
        .catch(err => {
          console.log(err);
        })
    } catch (err) {
      console.log(err);
    }
  }, [])
  // useEffect(async () => {
  //   try {
  //     const response = await fetch('../product.json');
  //     const jsonData = await response.json();
  //     dispatch(productAction.setData(jsonData))
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [])
  useEffect(() => {
    try {
      api.category.findMany()
        .then(res => {
          dispatch(categoryAction.setData(res.data.data))
        })
        .catch(err => {
          console.log(err);
        })
    } catch (err) {
      console.log(err);
    }
  }, [])

  useEffect(() => {
    try {
      api.brand.findMany()
        .then(res => {
          dispatch(brandAction.setData(res.data.data))
        })
        .catch(err => {
          console.log(err);
        })
    } catch (err) {
      console.log(err);
    }
  }, [])

  useEffect(() => {
    if (!localStorage.getItem('token')) return
    try {
      api.receipt.findMany()
        .then(res => {
          let cart = null;
          let receipt = [];
          for (let i in res.data.data) {
            if (res.data.data[i].status == "shopping") {
              cart = res.data.data[i]
            } else {
              receipt.push(res.data.data[i])
            }
          }
          dispatch(receiptAction.setCart(cart))
          dispatch(receiptAction.setReceipt(receipt))
        })
        .catch(err => { })
    } catch (err) { }
  }, [])
  return (
    <RouteIndex />
  )
}
