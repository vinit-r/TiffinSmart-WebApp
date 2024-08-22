import React from "react";
import { Outlet } from "react-router-dom";

function OrderConfirmLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default OrderConfirmLayout;
