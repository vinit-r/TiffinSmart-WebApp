import React from "react";

import FoodImg from "../../assets/image/cardFood1.png";
import Button from "../../shared/button";
import FoodCard from "../foodCard";
import { useLocation } from "react-router-dom";

const foodCardItemAddToCart = [
  {
    image: FoodImg,
    foodName: "LIGHT BITE",
    foodMenu: "1 Vegitable, 1 Dal, 3 Chapati, 1 Salad/Soup",
    rating: "4",
    delivery: "Free",
    time: "10 min", //TODO
  },
  {
    image: FoodImg,
    foodName: "HEALTHY MEAL",
    foodMenu: "1 Vegitable, 1 Paneer Dish, 2 Chapati, 1 Salad",
    rating: "4.5",
    delivery: "Free",
    time: "15 min",
  },
  {
    image: FoodImg,
    foodName: "FULL MEAL",
    foodMenu: "2 Vegetables, 1 Dal, 3 Chapati, 1 Salad, 1 Rice",
    rating: "4.8",
    delivery: "Free",
    time: "20 min",
  },
];

const AddToCart = () => {
  return (
    <>
      <div className="w-full h-full px-4 pt-10 sm:pt-20 lg:px-12  ">
        <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-10">
          <div className="w-full lg:w-1/2 flex flex-col items-center gap-2 sm:gap-5">
            <img src={`${FoodImg}`} alt="" className="w-full rounded-lg" />
            <Button
              buttonName={"Customize"}
              classStyle={"!bg-[#343c54] w-32 sm:!w-48 !text-center"}
            />
          </div>
          <div className="w-full flex flex-col">
            <div className="flex items-center gap-4 border-b-2 border-dotted border-gray-400 pb-1">
              <div className="border border-green-500 p-1 mb-4 sm:mb-6">
                <div className="w-3 lg:w-4 h-3 lg:h-4 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-theme-color text-xl sm:text-2xl lg:text-3xl font-bold">
                  Jumbo Feast
                </span>
                <span className="text-gray-500 font-semibold text-xs sm:text-sm lg:text-base">
                  1 Vegetable, 1 Dal, 3 Chapati, 1 Salad/Soup{" "}
                </span>
              </div>
            </div>
            <div className="py-3 font-footer_font font-semibold lg:text-base sm:text-sm text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              cumque numquam earum assumenda tempora reprehenderit labore quos
              ipsam, similique quam sint odit vitae animi voluptatem esse
              molestiae dolor eos! Tempore.
            </div>
            <div className=" flex items-center gap-3 text-theme-color font-semibold lg:font-bold">
              <span>Quantity</span>
              <div className="flex items-center gap-1">
                <span className="border-2 border-dotted border-gray-700 py-1 px-2">
                  _
                </span>
                <span className="border-2 border-dotted border-gray-700 p-1">
                  01
                </span>
                <span className="border-2 border-dotted border-gray-700 py-1 px-2">
                  +
                </span>
              </div>
            </div>
            <div className="w-full flex  gap-1 py-5">
              <Button
                buttonName={"Subscribe Meal"}
                classStyle={"!bg-black  !px-[10px]"}
                to={"../subscribe-meal"}
              />
              <Button
                buttonName={"Add to cart"}
                classStyle={"!px-3"}
                to={"add-to-cart"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-20 pt-20">
          <div className="text-xl sm:text-2xl md:text-3xl pl-4 font-extrabold text-center lg:text-start pb-4 sm:pb-8">
            Related Products
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 justify-items-center">
            {foodCardItemAddToCart?.map((items, index) => (
              <FoodCard
                key={index}
                image={items?.image}
                foodName={items?.foodName}
                foodMenu={items?.foodMenu}
                rating={items?.rating}
                delivery={items?.delivery}
                time={items?.time}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
