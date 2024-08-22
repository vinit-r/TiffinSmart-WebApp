import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTruck, faClock } from "@fortawesome/free-solid-svg-icons";

import Button from "../../shared/button";
import Image from "../../assets/image/food1.jpg";

export default function FoodCard(props) {
  const {
    type,
    image,
    foodName,
    foodMenu,
    rating,
    delivery,
    time,
    buttonOne,
    buttonTwo,
  } = props;
  return (
    // <div className="flex flex-wrap justify-center">
    <div>
      <div className="max-w-sm  rounded-lg shadow-xl flex flex-col">
        <a href="#" aria-label="image">
          <img className="p-2 rounded-2xl" src={`${image}`} alt="image" />
        </a>
        <div className="px-3 flex-1 flex flex-col justify-between">
          <a href="#" aria-label="text">
            <h5 className="mb-2 text-lg sm:text-xl font-bold tracking-tight text-black">
              {foodName}
            </h5>
          </a>
          <p className="mb-3 text-sm sm:font-normal text-gray-500 whitespace-nowrap overflow-hidden">
            {foodMenu}
          </p>
          {type === "mealplan" && (
            <div className="w-full flex items-center text-center justify-center gap-3 py-5">
              <Button
                buttonName={buttonOne}
                classStyle={"!bg-black !text-xs !px-[10px]"}
                to="subscribe-meal"
              />
              <Button
                buttonName={buttonTwo}
                classStyle={"!text-xs !px-3"}
                to="add-to-cart"
              />
            </div>
          )}
          <div className="flex lg:gap-4 sm:gap-3 gap-3 py-5">
            <div className="flex gap-1 items-center text-xs lg:text-sm">
              <FontAwesomeIcon
                className="text-theme-color pb-1"
                icon={faStar}
              />
              {rating}
            </div>
            <div className="flex gap-1 items-center text-xs lg:text-sm">
              <FontAwesomeIcon className="text-theme-color" icon={faTruck} />
              {delivery}
            </div>
            <div href="" className="flex gap-1 items-center text-xs lg:text-sm">
              <FontAwesomeIcon className="text-theme-color" icon={faClock} />
              {time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
