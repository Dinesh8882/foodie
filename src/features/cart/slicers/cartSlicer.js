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
            const item = state.cartItem.find(
                (item) => item.id === action.payload.id
            )
            if (!item) {
                state.cartItem.push({
                    ...action.payload,
                    addToCart: true,
                });
            }
        },
        deleteItem: (state, action) => {
            // const item = state.cartItem.find((item) => item.id === action.payload)
            // if (item) {
            // }
            state.cartItem = state.cartItem.filter((item) => item.id !== action.payload)
        }
    }
})


export const { addCart, deleteItem } = cartSlice.actions

export default cartSlice.reducer