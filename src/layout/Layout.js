import React, { Fragment } from "react";
import LeftSidebar from "./LeftSidebar";
import Header from "./Header";

const Layout = props => {
  return (
    <Fragment>
      <LeftSidebar />
      <Header />
      {props.children}
    </Fragment>
  );
};

export default Layout;
