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

const ckeckoutBannerContent = (
  <div className="flex flex-col w-full gap-4 sm:gap-8 justify-center items-center text-base sm:text-4xl font-bold text-center text-white pt-8 lg:pt-0">
    <span className="font-banner-font">
      Tasty delicious tiffin to fit your lifestyle
    </span>
    <div className="text-theme-color font-banner-font">
      <span className="px-2 ms:px-3 border-r-2 sm:border-r-4 border-theme-color">
        Healthy
      </span>
      <span className="px-2 ms:px-3 border-r-2 sm:border-r-4 border-theme-color">
        Hygiene
      </span>
      <span className="px-2 ms:px-3 border-r-2 sm:border-r-4 border-theme-color">
        Tasty
      </span>
      <span className="px-2 ms:px-3 border-r-2 sm:border-r-4 border-theme-color">
        Timely
      </span>
    </div>
  </div>
);
const bannerStyle = {
  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url("${BannerImg}")`,
};

const Checkout = () => {
  const [showCoupon, setShowCoupon] = useState(false);

  const toggleShowCoupon = () => {
    setShowCoupon(!showCoupon);
  };

  return (
    <>
      <div className="relative">
        <Banner
          bannerStyle={bannerStyle}
          content={ckeckoutBannerContent}
          classStyle={"lg:!h-full lg:!pb-[5rem] lg:!pt-[10rem]"}
        />
        <div className="w-full flex md:flex-row flex-col px-2 lg:px-10 xl:px-16">
          <div className="flex items-center sm:items-start flex-col gap-2 sm:gap-3 py-10 w-full">
            <p className="text-xl sm:text-2xl font-semibold">
              1 item selected in your cart
            </p>
            <div className="text-theme-color font-bold flex justify-end pr-2 w-full">
              <p>
                <span>Explore Menu</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start shadow-2xl py-2 sm:py-5 px-4">
              <img
                className="w-full sm:w-1/3 md:w-1/4 rounded-md"
                src={FoodImg}
                alt=""
              />
              <div className="flex flex-col h-full justify-between w-full sm:w-2/3 md:w-3/4">
                <div className="flex gap-2 pb-2 sm:pb-6 md:pb-1">
                  <div className="pt-1">
                    <div className="border border-green-500 p-1">
                      <div className="w-2 lg:w-3 h-2 lg:h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-theme-color text-base sm:text-lg lg:text-xl font-bold">
                      Jumbo Feast
                    </span>
                    <span className="text-gray-500 font-semibold text-xs sm:text-sm">
                      1 Vegetable, 1 Dal, 3 Chapati, 1 Salad/Soup{" "}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between sm:font-bold font-semibold">
                  <p className="text-base sm:text-lg">&#8377; 100</p>
                  <div className="flex bg-black text-white gap-2 sm:p-1 p-0 px-1 rounded-full items-center">
                    <p className="flex items-center justify-center bg-gray-500 rounded-full sm:h-5 h-4 sm:w-5 w-4 cursor-pointer">
                      <span>-</span>
                    </p>
                    <span>1</span>
                    <p className="flex items-center justify-center bg-gray-500 rounded-full sm:h-5 h-4 sm:w-5 w-4 cursor-pointer">
                      <span>+</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:pt-16 pt-8 w-full">
              <div className="text-xl sm:text-2xl font-semibold flex justify-center sm:justify-start">
                <p>Choose A Delivery Address</p>
              </div>

              <div className="mt-2 md:mt-8 shadow-2xl ">
                <div className="px-4 font-bold text-lg leading-5 sm:leading-0 sm:text-xl py-3 md:py-5 text-center sm:text-start">
                  <p className="text-theme-color">Select Delivery Address</p>
                  <p>You have Saved address in this location</p>
                </div>
                <div className="flex md:flex-row flex-col gap-2 lg:gap-5 lg:pl-4 pl-2 pr-2 lg:pr-8 my-3 md:py-5 py-3 ">
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
                          51, Electronic Complex, Sukhlia, Indore, Madhya
                          Pradesh 452003, India
                        </p>
                        <span className="font-semibold">20 MINS</span>
                        <span>
                          <Button
                            buttonName={"Deliver Here"}
                            classStyle={"rounded-sm"}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex border-[1px] border-gray-400 p-2 lg:p-3 shadow-xl w-full sm:w-auto">
                    <div className="flex flex-col">
                      <div className="flex pb-2">
                        <div className="sm:w-10 sm:h-10 h-8 w-8">
                          <img src={LocationIcon} alt="" />
                        </div>

                        <p className="flex flex-col">
                          <span className="text-theme-color font-bold sm:text-lg">
                            Add New Address
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col flex-1 justify-between text-start sm:text-center lg:text-start gap-2 sm:gap-4">
                        <p>
                          51, Electronic Complex, Sukhlia, Indore, Madhya
                          Pradesh 452003, India
                        </p>
                        <span>
                          <Button
                            buttonName={"Add New"}
                            classStyle={"rounded-sm !px-8"}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-0 sm:pl-2 lg:pl-6 xl:pl-8 pt-0 md:pt-20 pb-10">
            <div className="w-full shadow-2xl">
              <div className="font-bold text-lg pb-1 sm:pb-4 flex justify-center sm:justify-start">
                <p>Offers</p>
              </div>
              <div className="flex items-center justify-between gap-1 px-3 py-4 text-center">
                <img
                  className="w-7 lg:w-10 h-7 lg:h-10"
                  src={DiscountImg}
                  alt="discount image "
                />
                <div className="flex flex-col font-bold">
                  <p className="leading-0 sm:leading-4 text-base lg:text-lg text-theme-color">
                    Select Offer/ Appy Coupon
                  </p>
                  <p className="text-sm lg:text-base leading-0 sm:leading-4">
                    Get Discount with your order
                  </p>
                </div>
                <div className="w-8 h-8 cursor-pointer">
                  <img
                    src={NextArrow}
                    alt="next arrow"
                    onClick={toggleShowCoupon}
                  />
                </div>
                {
                  <CouponMode
                    showCoupon={showCoupon}
                    toggleShowCoupon={toggleShowCoupon}
                  />
                }
              </div>
            </div>
            <div className="w-full font-semibold sm:py-10 py-5">
              <div className="font-bold text-lg mb-6 flex justify-center sm:justify-start">
                <p>Price Details</p>
              </div>
              <div className="w-full shadow-2xl">
                <div className=" px-5 sm:py-5 py-1">
                  <p className="flex justify-between py-2">
                    <span>Sub Total</span>
                    <span>₹941.14</span>
                  </p>
                  <p className="flex justify-between py-2">
                    <span>Discount</span>
                    <span>₹99.99</span>
                  </p>
                  <p className="flex justify-between py-2">
                    <span>Taxes and Charges</span>
                    <span>₹25.40</span>
                  </p>
                  <p className="flex justify-between py-2">
                    <span>Delivery Charges</span>
                    <span>₹25.40</span>
                  </p>
                  <p className="flex justify-between py-2">
                    <span>Grand Total</span>
                    <span>₹1023.20</span>
                  </p>
                </div>
                <Button
                  buttonName={"Place Order"}
                  classStyle={"!w-full text-center !rounded-none !py-3"}
                />
              </div>
            </div>
            <div className="flex flex-col border border-dotted border-black p-4 lg:p-8 gap-4 shadow-xl">
              <p className="font-bold ">
                Review your order and address details to avoid cancellations
              </p>
              <p className="text-sm font-semibold">
                <span className="text-theme-color">Note:</span> If you cancel
                within 60 seconds of placing your order, a 100% refund will be
                issued. No refund for cancellations made after 60 seconds.
                <span className="block">
                  Avoid cancellation as it leads to food wastage.
                </span>
              </p>
              <p className="text-theme-color font-bold">
                Read cancellation policy
              </p>
            </div>
          </div>
        </div>
        {/* <CouponAppliedModel /> */}
      </div>
    </>
  );
};

export default Checkout;
