import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../slice/productSlice";

const store = configureStore({
  reducer: {
    myStore: productReducer,
  },
});

export default store;
