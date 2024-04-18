import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.push(action.payload);
            } else {
                alert("Item already in Cart");
            }
        },
        removeFromCart: (state, action) => {
           return state.filter(item => item.id != action.payload)
        },
        clearCart: (state) => {
            return state = []; // only state as there is no payload
        }

    }
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;