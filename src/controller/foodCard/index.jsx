import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTruck, faClock } from "@fortawesome/free-solid-svg-icons";

import Button from "../../shared/button";
import Image from "../../assets/image/food1.jpg";

export default function FoodCard(props) {
  const { type } = props;
  return (
    <div>
      <div className="max-w-sm bg-white rounded-lg shadow-2xl m-2">
        <a href="#">
          <img className="p-2 rounded-2xl" src={`${Image}`} alt="" />
        </a>
        <div className="px-2">
          <a href="#">
            <h5 className="mb-2 text-lg sm:text-xl font-bold tracking-tight text-black">
              LITE BITE
            </h5>
          </a>
          <p className="mb-3 text-sm sm:font-normal text-gray-500 ">
            1 Vegitable, 1 Dal, 3 Chapati, 1 Salad/Soup
          </p>
          {type === "mealplan" && (
            <div className="w-full flex items-center justify-center gap-3 py-5">
              <Button
                buttonName={"Subscribe Meal"}
                classStyle={"!bg-black !text-xs !px-[10px]"}
                to="subscribe-meal"
              />
              <Button
                buttonName={"Add to cart"}
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
              4
            </div>
            <div className="flex gap-1 items-center text-xs lg:text-sm">
              <FontAwesomeIcon className="text-theme-color" icon={faTruck} />
              Free
            </div>
            <div href="" className="flex gap-1 items-center text-xs lg:text-sm">
              {" "}
              <FontAwesomeIcon className="text-theme-color" icon={faClock} />
              20 min.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
