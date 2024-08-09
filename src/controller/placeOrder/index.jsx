import React from "react";
import { useState } from "react";
import CouponMode from "../coupon";
import CouponAppliedModel from "../couponAppliedModal";
import Banner from "../../shared/banner";

import BannerImg from "../../assets/image/mealPlanBanner.png";
import FoodImg from "../../assets/image/food1.jpg";
import DiscountImg from "../../assets/image/Discount.png";
import NextArrow from "../../assets/image/nextArrow.png";
import LocationIcon from "../../assets/image/locationIcon.png";

import Button from "../../shared/button";
import { useNavigate } from "react-router-dom";

// const ckeckoutBannerContent = (
//   <div className="flex flex-col w-full gap-4 sm:gap-8 justify-center items-center text-base sm:text-4xl font-bold text-center text-white pt-8 lg:pt-0">
//     <span className="font-banner-font">
//       Tasty delicious tiffin to fit your lifestyle
//     </span>
//     <div className="text-theme-color font-banner-font">
//       <span className="px-2 ms:px-3 border-r-2 sm:border-r-4 border-theme-color">
//         Healthy
//       </span>
//       <span className="px-2 ms:px-3 border-r-2 sm:border-r-4 border-theme-color">
//         Hygiene
//       </span>
//       <span className="px-2 ms:px-3 border-r-2 sm:border-r-4 border-theme-color">
//         Tasty
//       </span>
//       <span className="px-2 ms:px-3 border-r-2 sm:border-r-4 border-theme-color">
//         Timely
//       </span>
//     </div>
//   </div>
// );
// const bannerStyle = {
//   backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url("${BannerImg}")`,
// };

const PlaceOrder = () => {
  const [showCoupon, setShowCoupon] = useState(false);
  const navigate = useNavigate();

  const toggleShowCoupon = () => {
    setShowCoupon(!showCoupon);
  };

  return (
    <>
      <div className="md:pt-16 pt-8 w-full">
        <div className="text-xl sm:text-2xl font-semibold flex justify-center sm:justify-start">
          <p>Choose A Delivery Address</p>
        </div>

        <div className="mt-2 md:mt-8 shadow-2xl ">
          <div className="px-4 font-bold text-lg leading-5 sm:leading-0 sm:text-xl py-3 md:py-5 text-center sm:text-start">
            <p className="text-theme-color">Delivery Address</p>
          </div>
          <div className="flex md:flex-row justify-center flex-col gap-2 lg:gap-5 lg:pl-4 pl-2 pr-2 lg:pr-8 my-3 md:py-5 py-3 ">
            <div className="flex border-[1px] border-gray-400 p-2 lg:p-3 shadow-xl w-full sm:w-auto">
              <div className="flex flex-col">
                <div className="flex pb-2">
                  <div className="sm:w-10 sm:h-10 h-8 w-8">
                    <img src={LocationIcon} alt="" />
                  </div>

                  <p className="flex flex-col">
                    <span className="text-theme-color font-bold sm:text-lg">
                      Pardesipura
                    </span>
                    <span className="font-semibold text-sm sm:text-sm">
                      Shivani Tanwar
                    </span>
                  </p>
                </div>
                <div className="flex flex-col flex-1 justify-between text-start sm:text-center lg:text-start gap-2 sm:gap-4">
                  <p>
                    51, Electronic Complex, Sukhlia, Indore, Madhya Pradesh
                    452003, India
                  </p>
                  <span className="font-semibold">20 MINS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Button classStyle={"bg-black"} buttonName={"PlaceOrder"} /> */}
        <button
          onClick={() => navigate("payment")}
          className="bg-black h-fit w-fit p-4  font-bold  text-white  ml-96 mt-4"
        >
          Place Order
        </button>
      </div>
    </>
  );
};

export default PlaceOrder;
