import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        addModal: false
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        loadModal: (state) => {
            state.addModal = !state.addModal
        },
        addData: (state, action) => {
            state.data.unshift(action.payload)
        },
        update: (state, action) => {
            state.data = state.data.map(item => {
                if (item.id == action.payload.id) {
                    return action.payload
                } else {
                    return item
                }
            })
        }
    }
})

export const productReducer = productSlice.reducer;
export const productAction = productSlice.actions;