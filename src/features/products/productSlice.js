import { createSlice } from "@reduxjs/toolkit";
import { dishes } from "../../data/dishes";

const initialState = {
    products: dishes
}

const productSlicer = createSlice({
    name: "products",
    initialState,
    reducers: {}
})


export default productSlicer.reducer