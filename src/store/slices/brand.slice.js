import { createSlice } from "@reduxjs/toolkit";

const brandSlice = createSlice({
    name: "brand",
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

export const brandReducer = brandSlice.reducer;
export const brandAction = brandSlice.actions;