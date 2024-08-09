import React from "react";
import COD from "../../assets/image/COD.png";
import Button from "../../shared/button";

function CashOnDelivery() {
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
          <Button buttonName="Confirm Order" />
        </div>
      </div>
    </div>
  );
}

export default CashOnDelivery;
