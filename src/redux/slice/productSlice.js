import { createSlice } from "@reduxjs/toolkit";
import getProduct from "../../services/Product/getProduct";
import { product } from "../../utils/product";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    cart: [],
    loader: false,
    error: "",
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },

    updateCart: (state, action) => {
      state.cart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state, action) => {
      state.loader = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loader = false;
      state.products = action.payload.data;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.error = "something went wrong";
    });
  },
});

export const { addToCart, updateCart } = productSlice.actions;
export const productReducer = productSlice.reducer;
