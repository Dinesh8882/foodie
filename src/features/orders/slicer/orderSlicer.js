import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: []
}

const orderSlicer = createSlice({
    name: "orders",
    initialState,
    reducers: {
        placeOrders: (state, action) => {
            state.orders.unshift({
                id: crypto.randomUUID(),
                ...action.payload,
                status: "Preparing",
                orderedAt: new Date().toISOString()
            })
        }
    }
})



export const { placeOrders } = orderSlicer.actions

export default orderSlicer.reducer