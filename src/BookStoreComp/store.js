import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice.ts";
const store=configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default store;