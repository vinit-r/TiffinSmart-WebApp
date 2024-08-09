import React from "react";
import OrderPlacedImg from "../../assets/image/orderPlacedIcon.png";
import Button from "../../shared/button";

const OrderPlaced = () => {
  return (
    <>
      {/* {/ //TODO we need to add this gradient color background to the required /}
      {/ //?components as per the figma design required #lineNo 1 /} */}

      <div className="w-full flex justify-center items-center bg-gradient-to-r from-white to-[#fff3dc] py-10">
        <div className="flex flex-col gap-2 w-full md:w-1/2 lg:w-1/3 px-5 items-center py-10 ">
          <span className="flex justify-center pb-2">
            <img
              className="w-20 sm:w-24 bg-green-200 rounded-full p-2 sm:p-3"
              src={OrderPlacedImg}
              alt=""
            />
          </span>
          <p className="text-xl sm:text-2xl font-bold font-footer_font">
            Your Order has been
          </p>
          <p className="text-xl sm:text-2xl font-bold font-footer_font">
            Successfully Placed
          </p>
          <p className="text-xl sm:text-2xl font-bold py-5 sm:py-10">
            Order Id:#008679
          </p>
          <span>
            <Button
              buttonName={"Track Order"}
              classStyle={"!rounded-sm !px-8"}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default OrderPlaced;
