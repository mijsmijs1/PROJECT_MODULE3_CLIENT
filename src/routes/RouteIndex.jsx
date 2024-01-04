import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy } from '@utils'
export default function RouteIndex() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={lazy.lazyFn(() => import("../pages/home/Home"))()}>
          <Route path="category/:categoryName/:brandName" element={lazy.lazyFn(() => import("../pages/home/pages/categories/Category.jsx"))()}></Route>
          <Route path="cart" element={lazy.lazyFn(() => import("../pages/home/pages/cart/Cart.jsx"))()}></Route>
          <Route path="receipts" element={lazy.lazyFn(() => import("../pages/home/pages/receipts/Receipt.jsx"))()}></Route>
          <Route path="product-info/:id" element={lazy.lazyFn(() => import("../pages/home/components/product-info/ProductInfo.jsx"))()}></Route>
        </Route>
        <Route path="/authen" element={lazy.lazyFn(() => import("../pages/authen/Authen.jsx"), localStorage.getItem('token') == null)()}></Route>
        <Route path="/admin" element={lazy.lazyFn(() => import("../pages/admin/Admin.jsx"), localStorage.getItem('token') != null)()}>
          <Route path="product/list" element={lazy.lazyFn(() => import("../pages/admin/pages/products/List.jsx"))()}></Route>
          <Route path="product/recycle" element={lazy.lazyFn(() => import("../pages/admin/pages/products/Recycle.jsx"))()}></Route>
          <Route path="category/list" element={lazy.lazyFn(() => import("../pages/admin/pages/categories/List.jsx"))()}></Route>
          <Route path="category/recycle" element={lazy.lazyFn(() => import("../pages/admin/pages/categories/Recycle.jsx"))()}></Route>
          <Route path="brand/list" element={lazy.lazyFn(() => import("../pages/admin/pages/brands/List.jsx"))()}></Route>
          <Route path="brand/recycle" element={lazy.lazyFn(() => import("../pages/admin/pages/brands/Recycle.jsx"))()}></Route>
          <Route path="user/list" element={lazy.lazyFn(() => import("../pages/admin/pages/users/List.jsx"))()}></Route>
          <Route path="user/recycle" element={lazy.lazyFn(() => import("../pages/admin/pages/users/Recycle.jsx"))()}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// false => da
// true => ok