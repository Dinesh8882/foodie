import { configureStore } from '@reduxjs/toolkit'

import productReducer from '../features/products/productSlice'
import cartReducer from '../features/cart/slicers/cartSlicer'
import favoReducer from '../features/favorite/slicer/favoSlicer'

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        favorite: favoReducer
    }
})

export default store;