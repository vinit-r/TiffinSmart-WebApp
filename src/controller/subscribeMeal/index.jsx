import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

import Button from "../../shared/button";

import SunIcon from "../../assets/image/sunIcon.png";
import MoonStarIcon from "../../assets/image/moonAndStars.png";

const SubscribeMeal = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="flex flex-col text-center sm:text-start items-center sm:items-start gap-4 md:gap-8 px-2 lg:px-10 xl:px-16 py-5 md:py-10">
          <p className="text-xl font-bold">Select Meal Time</p>
          <div className="flex gap-6 text-white font-bold text-xl md:text-2xl">
            <div className="bg-theme-color flex flex-col justify-center items-center py-2 px-4">
              <img className="w-8 h-8" src={SunIcon} alt="Sun Icon" />
              Lunch
            </div>
            <div className="bg-black flex flex-col justify-center items-center py-2 px-4">
              <img
                className="w-8 h-8 "
                src={MoonStarIcon}
                alt="Moon Ans start Icon"
              />
              Dinner
            </div>
          </div>

          <p className="text-lg leading-5 sm:text-2xl text-gray-500 font-semibold sm:font-bold">
            Order Lunch a day prior before 12 Am & Dinner same day before 12 PM.
          </p>
          <p className="text-lg leading-5 sm:text-2xl text-gray-500 font-semibold sm:font-bold">
            PLACE SEPARATE ORDERS FOR LUNCH AND DINNER
          </p>
        </div>
        <p className="border border-b-[1px] mx-2 sm:mx-4"></p>

        <div className="flex flex-col items-center sm:items-start gap-4 md:gap-8 px-2 lg:px-10 xl:px-16 py-5 md:py-10">
          <p className="text-xl font-bold">Select Meal Plan</p>
          <div className="flex gap-3 sm:gap-6 font-bold text-center sm:text-start text-xl md:text-2xl">
            <div className="flex flex-col justify-center items-center ">
              <p className="bg-black text-white px-4 py-4 sm:py-8 border-[2px] border-dashed border-white">
                1 Week
              </p>
              <span className="pt-3 text-theme-color">5% Off</span>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <p className="px-4 py-4 sm:py-8 border-[2px] border-dashed border-theme-color">
                2 Week
              </p>
              <span className="pt-3">7% Off</span>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <p className="px-4 py-4 sm:py-8 border-[2px] border-dashed border-theme-color">
                3 Week
              </p>
              <span className="pt-3">10% Off</span>
            </div>
          </div>
        </div>
        <p className="border border-b-[1px] mx-2 sm:mx-4"></p>

        <div className="sm:flex flex-row ">
          <div className="w-full flex flex-col items-center sm:items-start py-5 px-2 lg:pl-10 xl:pl-16">
            <div className="flex flex-col gap-4 md:gap-8">
              <p className="text-xl font-bold">Select Meal Frequency</p>
              <div className="flex gap-3 sm:gap-6 font-semibold sm:font-bold text-lg sm:text-xl md:text-2xl ">
                <div className="flex flex-col justify-center items-center leading-5 sm:leading-7 bg-black text-white px-4 py-3 sm:py-2 border-[2px] border-dashed border-white">
                  {/* <p className="bg-black text-white px-4 py-8 border-[2px] border-dashed border-white"> */}
                  <span>Monday</span>
                  <span>To</span>
                  <span>Friday</span>
                  {/* </p> */}
                </div>
                <div className="flex flex-col justify-center items-center leading-5 sm:leading-7 px-2 py-2 border-[2px] border-dashed border-theme-color">
                  <span>Monday</span>
                  <span>To</span>
                  <span>Saturday</span>
                </div>
              </div>
            </div>
            {/* <p className="border-b-[1px] mx-2 sm:mx-4"></p> */}
            <div className="flex flex-col gap-4 md:gap-8 pt-10 w-full items-center sm:items-start">
              <p className="text-xl font-bold">Select Meal Frequency</p>
              <div className="w-full flex gap-1 sm:gap-6 font-semibold sm:font-bold text-lg sm:text-xl md:text-2xl ">
                <div className="flex flex-col w-full">
                  <label className="text-base sm:text-lg text-gray-500">
                    Order Ends On
                  </label>
                  <input
                    className="outline-none text-base border-t-[1px] rounded-md shadow-md p-1 sm:p-2 text-gray-500"
                    type="date"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-base sm:text-lg text-gray-500">
                    Order Ends On
                  </label>
                  <input
                    className="outline-none text-base border-t-[1px] rounded-md shadow-md p-1 sm:p-2 text-gray-500"
                    type="date"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-1/3 mb-5 pt-2 px-1 lg:px-5">
            <div className="shadow-2xl ">
              <div className="bg-theme-color text-white text-center p-2 ms:p-3 font-bold">
                <p>Subscription Summary For Jumbo Feast</p>
              </div>

              <div className="m-2 border-[1px] border-dotted border-black py-5">
                <p className="text-center font-semibold text-lg pb-5">
                  Order Details For Lunch
                </p>
                <div className="grid grid-cols-2 p-1 border-b-[1px] border-dotted border-gray-600 mx-2">
                  <span className="">Meal Plane</span>
                  <span>1 Week</span>
                </div>
                <div className="grid grid-cols-2 p-1 border-b-[1px] border-dotted border-gray-600 mx-2">
                  <span className="">Meal Frequency</span>
                  <span>Monday To Friday</span>
                </div>
                <div className="grid grid-cols-2 p-1 border-b-[1px] border-dotted border-gray-600 mx-2">
                  <span className="">Meal Quantity</span>
                  <span>1 </span>
                </div>
                <div className="grid grid-cols-2 p-1 border-b-[1px] border-dotted border-gray-600 mx-2">
                  <span className="">Price</span>
                  <span>&#x20b9; 360</span>
                </div>
                <div className="grid grid-cols-2 p-1 border-b-[1px] border-dotted border-gray-600 mx-2">
                  <span className="">Discount</span>
                  <span>&#x20b9; 360</span>
                </div>
                <div className="grid grid-cols-2 p-1 border-b-[1px] border-dotted border-gray-600 mx-2">
                  <span className="">Tax</span>
                  <span>&#x20b9; 360</span>
                </div>
                <div className="grid grid-cols-2 p-1 border-b-[1px] border-dotted border-gray-600 mx-2">
                  <span className="">Delivery Charges</span>
                  <span>&#x20b9; 360</span>
                </div>
                <div className="grid grid-cols-2 p-1  mx-2">
                  <span className="">Grand Total</span>
                  <span>&#x20b9; 360</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center md:justify-end px-2 lg:px-10 xl:px-16 pb-5 md:pb-10 cursor-pointer">
          <Button buttonName={"Checkout"} classStyle={"!rounded-sm !px-16"} />
        </div>
      </div>
    </>
  );
};

export default SubscribeMeal;
