import Header from "../controller/header";
import Footer from "../controller/footer";
import { Outlet } from "react-router-dom";

import React from "react";

function IndexLayout() {
  return (
    <>
      <div className="relative">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default IndexLayout;
