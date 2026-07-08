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
            const item = state.cartItem.find((item) => item.id === action.payload)

            if (!item) {
                state.cartItem.push({
                    id: action.payload,
                    quantity: 1
                })
            }
        },
        deleteItem: (state, action) => {
            state.cartItem = state.cartItem.filter((item) => item.id !== action.payload)
        },
        incrQuantity: (state, action) => {
            const item = state.cartItem.find(
                item => item.id === action.payload
            );

            if (item) {
                item.quantity++;
            }
        },
        decQuantity: (state, action) => {
            const item = state.cartItem.find(
                item => item.id === action.payload
            )
            if (!item) return;

            item.quantity--;

            if (item.quantity <= 0) {
                state.cartItem = state.cartItem.filter(
                    item => item.id !== action.payload
                );
            }
        }
    }
})


export const { addCart, deleteItem, incrQuantity, decQuantity } = cartSlice.actions

export default cartSlice.reducer