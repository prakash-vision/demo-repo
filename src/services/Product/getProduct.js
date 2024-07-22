import { createAsyncThunk } from "@reduxjs/toolkit";
import { productAxiosInstance } from "../interceptors";

// const getProduct = async () => {
//   try {
//     const response = await productAxiosInstance.get("/products");
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default getProduct;

const getProduct = createAsyncThunk("getProduct", async () => {
  try {
    const response = await productAxiosInstance.get("/products");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export default getProduct;
