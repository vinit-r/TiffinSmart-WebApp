import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../shared/banner";

import MealPlanImg from "../assets/image/mealPlanBanner.png";

const bannerStyle = {
  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url("${MealPlanImg}")`,
};
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

function MealLayout() {
  return (
    <div className="">
      <Banner
        bannerStyle={bannerStyle}
        content={mealPlanBannerContent}
        classStyle={"lg:!h-[80vh]"}
      />
      <Outlet />
    </div>
  );
}

export default MealLayout;
