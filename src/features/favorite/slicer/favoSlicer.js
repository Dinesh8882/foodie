import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteItem: []
}


export const favoriteSlicer = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavo: (state, action) => {
            const itemId = state.favoriteItem.includes(action.payload)
            if (!itemId) {
                state.favoriteItem.push(action.payload)
            }

        },
        removeToFavo: (state, action) => {
            state.favoriteItem = state.favoriteItem.filter((item) => item !== action.payload)
        }
    }
})


export const { addToFavo, removeToFavo } = favoriteSlicer.actions

export default favoriteSlicer.reducer