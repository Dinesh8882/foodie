import { configureStore } from '@reduxjs/toolkit'


import cartReducer from '../features/cart/slicers/cartSlicer'

const store = configureStore({
    reducer: cartReducer
})

export default store;