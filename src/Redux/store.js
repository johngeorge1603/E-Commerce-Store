import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "../Slice/wishlist";
import cartSlice from "../Slice/cart";


const store= configureStore({

    reducer:{
        wishlistReducer: wishlistSlice,
        cartReducer: cartSlice
    }

})

export default store