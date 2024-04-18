import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState:[],
    reducers:{
        addToWishlist:(state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.push(action.payload);
            } else {
                alert("Item already in wishlist");
            }
        },
        removeFromWishlist: (state, action) => {
           return state.filter(item => item.id!=action.payload)
        }

    }
})

export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer