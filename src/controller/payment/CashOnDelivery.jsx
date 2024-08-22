import React from "react";
import { useNavigate } from "react-router-dom";

import COD from "../../assets/image/COD.png";
import Button from "../../shared/button";

function CashOnDelivery() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex  justify-center">
      <div className="flex-col mt-6 text-center ">
        <div>
          <img src={COD} className="h-60" alt="" />
        </div>
        <h1 className="text-2xl mt-4 font-bold">
          If You wish to pay <br /> through cash
        </h1>
        <div className="mt-3">
          <Button buttonName="Confirm Order" to="../../../../order-confirm" />
        </div>
      </div>
    </div>
  );
}

export default CashOnDelivery;
