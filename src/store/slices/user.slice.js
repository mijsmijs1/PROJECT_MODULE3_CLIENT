import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        data: null,
        list: [],
        addModal: false
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setList: (state, action) => {
            state.list = action.payload
        },
        loadModal: (state) => {
            state.addModal = !state.addModal
        },
        addData: (state, action) => {
            state.list.unshift(action.payload)
        },
        update: (state, action) => {
            state.list = state.list.map(item => {
                if (item.id == action.payload.id) {
                    return action.payload
                } else {
                    return item
                }
            })
        }
    }
})

export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;