import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user.slice";
import { productReducer } from "./slices/product.slice";
import { categoryReducer } from "./slices/category.slice";
import { brandReducer } from "./slices/brand.slice";
import { receiptReducer } from "./slices/receipt.slice";
import { fetchUserData } from "./slices/user.slice";
export const store = configureStore({
    reducer: {
        userStore: userReducer,
        productStore: productReducer,
        categoryStore: categoryReducer,
        brandStore: brandReducer,
        receiptStore: receiptReducer
    }
})
store.dispatch(fetchUserData())