import React from "react";
import Button from "../../shared/button";
import MasterCard from "../../assets/image/MasterCard.png";
import Visa from "../../assets/image/Visa.png";

import Inputs from "../../shared/input";

function CreditCard() {
  return (
    <div className="w-full  ">
      <div>
        <div>
          <h1 className="font-bold text-xl text-theme-color">
            Pay using Credit Card
          </h1>
          <div className="flex">
            <div className="mr-4">
              <h1 className="font-bold text-lg">We Accept</h1>
            </div>
            <div className="flex  ">
              <img src={MasterCard} alt="" />
              <img src={Visa} className="w-12 ml-4 mt-1" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-3">
            <Inputs label={"Credit card No."} />
            <Inputs label={"Name On Card"} />
          </div>
          <div className="flex gap-3">
            <Inputs label={"Expiry Date"} />
            <Inputs label={"Cvv No."} />
          </div>
          <div className="flex justify-end  ">
            <Button buttonName={"Pay Now"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
