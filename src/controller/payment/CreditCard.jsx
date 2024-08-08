import React from "react";
import Button from "../../shared/button";
import MasterCard from "../../assets/image/MasterCard.png";
import Visa from "../../assets/image/Visa.png";

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
        <div>
          <div>
            <div>
              <label htmlFor="creadiCardNo"></label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="name"></label>
              <input type="text" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="creadiCardNo"></label>
              <input type="text" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
