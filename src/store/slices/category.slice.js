import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        data: null,
        addModal: false
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        loadModal: (state) => {
            state.addModal = !state.addModal
        },
        update: (state, action) => {
            state.data = state.data.map(item => {
                if (item.id == action.payload.id) {
                    return action.payload
                } else {
                    return item
                }
            })
        },
        addData: (state, action) => {
            state.data.unshift(action.payload)
        },
    }
})

export const categoryReducer = categorySlice.reducer;
export const categoryAction = categorySlice.actions;