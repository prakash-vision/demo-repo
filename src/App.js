import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import ErrorPage from "./components/ErrorPage";
import ProductsDetails from "./components/ProductsDetails";
import Shopping from "./components/Shopping";
import { useDispatch } from "react-redux";
import getProduct from "./services/Product/getProduct";
import { useEffect } from "react";
import Cart from "./components/Cart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/product" element={<Shopping />}>
            <Route path="" element={<Products />} />
            <Route path="details/:id" element={<ProductsDetails />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
