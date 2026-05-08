import {configureStore } from "@reduxjs/toolkit";   
import jokeSlice from "./seestore";

const store = configureStore({
    reducer:{
        joke:jokeSlice.reducer
    }
})


export default store;
