import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '@services/apis'
export const fetchUserData = createAsyncThunk(
    'users/fetchByIdStatus',
    async () => {
        try {
            const result = await api.authen.decodeToken(localStorage.getItem("token"))
            return result.data.data
        } catch (err) {
            localStorage.removeItem("token")
            dispatch(userAction.setData(null))
        }

    }
)
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
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            // Add user to the state array
            state.data = action.payload
        })
    }
})

export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;