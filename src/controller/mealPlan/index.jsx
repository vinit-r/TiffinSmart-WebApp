import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import Banner from "../../shared/banner";
import Button from "../../shared/button";
import FoodCard from "../foodCard";
import MealPlanImg from "../../assets/image/mealplan.jpg";

const mealPlanBannerContent = (
  <div className="flex flex-col w-full gap-4 sm:gap-8 justify-center items-center text-base sm:text-4xl font-bold text-center text-white pt-8 lg:pt-0">
    <div>
      <span className=" bg-theme-color py-2 sm:py-0 px-6 rounded-md">
        Homemade Meal Plans
      </span>
    </div>
    <span className="font-banner-font">When You Need A Comfort Break</span>
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

const MealPlan = () => {
  return (
    <>
      <div className="w-full  h-full">
        <Banner BannerImg={MealPlanImg} content={mealPlanBannerContent} />

        <div className="flex flex-col py-10 sm:py-14 px-3 sm:px-0 w-full justify-center items-center bg-white text-black">
          <div className="flex flex-col gap-2 sm:gap-5 text-center sm:w-[70vw]">
            <div className="text-3xl font-bold">Meal Plans</div>

            <p className="font-banner-font font-semibold text-black text-sm sm:text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis in nisi consectetur, ipsam aperiam facere, repudiandae
              suscipit eius atque dicta ut minus porro? Esse fuga, ullam
              deserunt quo, ducimus aliquam maiores.
            </p>
            <div className="flex justify-center items-center gap-3 mt-5">
              <Button
                icon={faSun}
                buttonName={"Lunch"}
                classStyle={
                  "!bg-[#f4444c] !font-semibold sm:!font-bold !text-base sm:!text-lg"
                }
              />
              <Button
                icon={faMoon}
                buttonName={"Dinner"}
                classStyle={
                  "!bg-black !font-semibold sm:!font-bold !text-base sm:!text-lg"
                }
              />
            </div>
            <p className="font-semibold text-black text-base sm:text-3xl text-center">
              Order Lunch A Day Prior Before 8 PM & Dinner Same Day Before 12
              Afternoon
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  py-5 px-0 sm:px-4 sm:py-20 justify-center items-center">
            <FoodCard type={"mealplan"} />
            <FoodCard type={"mealplan"} />
            <FoodCard type={"mealplan"} />
            <FoodCard type={"mealplan"} />
            <FoodCard type={"mealplan"} />
            <FoodCard type={"mealplan"} />
            <FoodCard type={"mealplan"} />
            <FoodCard type={"mealplan"} />
          </div>

          {/* <div className="flex items-center cursor-pointer">
            <span className="text-theme-color text-lg sm:text-2xl font-bold">
              View More
            </span>
            <FontAwesomeIcon
              className="pl-2 w-5 sm:w-6 h-5 sm:h-6 "
              icon={faCircleChevronRight}
            />
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex justify-center">
              <div className="p-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <div className="">
                <span>Heading of the content: </span>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolorum laborum obcaecati sint
                laboriosam distinctio officia recusandae facilis soluta
                laudantium ducimus, reiciendis, incidunt aperiam, quia voluptas?
                Ipsam nemo expedita voluptatum sit.
              </div>
            </div>
            <div className="flex justify-center">
              <div className="p-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <div className="">
                <span>Heading of the content: </span>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolorum laborum obcaecati sint
                laboriosam distinctio officia recusandae facilis soluta
                laudantium ducimus, reiciendis, incidunt aperiam, quia voluptas?
                Ipsam nemo expedita voluptatum sit.
              </div>
            </div>
            <div className="flex justify-center">
              <div className="p-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <div className="">
                <span>Heading of the content: </span>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolorum laborum obcaecati sint
                laboriosam distinctio officia recusandae facilis soluta
                laudantium ducimus, reiciendis, incidunt aperiam, quia voluptas?
                Ipsam nemo expedita voluptatum sit.
              </div>
            </div>
            <div className="flex justify-center">
              <div className="p-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <div className="">
                <span>Heading of the content: </span>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolorum laborum obcaecati sint
                laboriosam distinctio officia recusandae facilis soluta
                laudantium ducimus, reiciendis, incidunt aperiam, quia voluptas?
                Ipsam nemo expedita voluptatum sit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealPlan;
