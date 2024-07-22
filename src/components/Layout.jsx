import React, { Fragment } from "react";
import NavbarComponent from "./NavbarComponent";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <NavbarComponent />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
