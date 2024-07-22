import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Contact from "../components/Contact";
import ErrorPage from "../components/ErrorPage";
import Products from "../components/Products";
import Shopping from "../components/Shopping";
import ProductsDetails from "../components/ProductsDetails";
import Layout from "../components/Layout";
import Login from "../components/Login";
import Authorization from "../components/Authorization";
import Admin from "../components/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Authorization component={Home} />,
      },
      {
        path: "about",

        element: <Authorization component={About} />,
      },
      {
        path: "/contact",
        element: <Authorization component={Contact} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin",
        element: <Authorization component={Admin} />,
      },
      {
        path: "/product",
        element: <Authorization component={Shopping} />,
        children: [
          {
            path: "",
            element: <Products />,
          },
          {
            path: "details/:id",
            element: <ProductsDetails />,
          },
        ],
      },
    ],
  },
]);

export default router;
