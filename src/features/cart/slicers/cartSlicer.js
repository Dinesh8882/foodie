import { createSlice } from "@reduxjs/toolkit";
import { AiTwotoneInfoCircle } from "react-icons/ai";

const initialState = {
    cartItem: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const item = {
                ...action.payload,
                addToCart: true
            }
            state.cartItem.push(item)
        },
        deleteItem: (state, action) => {
            state.cartItem = state.cartItem.filter((item) => item.id !== action.payload)
        }
    }
})


export const { addCart, deleteItem } = cartSlice.actions

export default cartSlice.reducer