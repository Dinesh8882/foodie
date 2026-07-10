import { configureStore } from '@reduxjs/toolkit'

import productReducer from '../features/products/productSlice'
import cartReducer from '../features/cart/slicers/cartSlicer'
import favoReducer from '../features/favorite/slicer/favoSlicer'
import orderReducer from '../features/orders/slicer/orderSlicer'

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        favorite: favoReducer,
        order: orderReducer
    }
})

export default store;