import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Header from "../header";
import Footer from "../footer";
import Button from "../../shared/button";
import Banner from "../../shared/banner";
import FoodCard from "../foodCard";
import Card from "../../shared/card";

import BannerImg from "../../assets/image/bannerFood.png";
import "./index.css";

const content = (
  <div className="flex flex-col sm:w-full lg:w-1/2 gap-4 sm:gap-8">
    <span className="text-xs sm:text-base pt-5 lg:pt-0">People Trust Us</span>
    <div className=" text-lg sm:text-[3rem] font-bold leading-[1.5rem] sm:leading-[3rem] text-white font-banner-font">
      Be The <span className="text-theme-color">Fastest</span> in{" "}
      <span className="text-theme-color">Delivery</span> Your{" "}
      <span className="text-theme-color">Food</span>
    </div>
    <div className="font-banner-font text-xs sm:text-base">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
      inventore sint quasi optio dolorum beatae odio vel dolorem minus minima?
      Quo nemo a impedit distinctio exercitationem officiis, temporibus eveniet
      totam!
    </div>
    <div>
      <Button buttonName={"Download App"} classStyle={"!rounded-3xl"} />
    </div>
  </div>
);
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};
const Home = () => {
  return (
    <>
      <div className="w-full h-full ">
        {/* <Header /> */}

        <Banner BannerImg={BannerImg} content={content} />

        <div className="flex flex-col py-10 sm:py-14 px-3 sm:px-0 w-full justify-center items-center">
          <div className="flex flex-col gap-2 sm:gap-5 text-center sm:w-[70vw]">
            <div className="text-3xl font-bold">
              Today <span className="text-theme-color">Special</span> Offers
            </div>
            <p className="font-banner-font font-semibold text-gray-600 text-sm sm:text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis in nisi consectetur, ipsam aperiam facere, repudiandae
              suscipit eius atque dicta ut minus porro? Esse fuga, ullam
              deserunt quo, ducimus aliquam maiores.
            </p>
          </div>
          <div className="w-full pl-0 lg:pl-6 py-10">
            <Carousel
              responsive={responsive}
              ssr={true}
              infinite={true}
              keyBoardControl={true}
              customTransition="all 1s"
              transitionDuration={500}
              // showDots={true}
              // containerClass="carousel-container"
              // itemClass="carousel-item"
            >
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
            </Carousel>
          </div>
        </div>

        <div className="flex flex-col py-10 sm:py-14 px-3 sm:px-0 w-full justify-center items-center bg-gradient-to-r from-black to-[#241d10] text-white">
          <div className="flex flex-col gap-2 sm:gap-5 text-center sm:w-[70vw]">
            <div className="text-3xl font-bold">
              How <span className="text-theme-color">it</span> works
            </div>
            <p className="font-banner-font font-semibold text-white text-sm sm:text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis in nisi consectetur, ipsam aperiam facere, repudiandae
              suscipit eius atque dicta ut minus porro? Esse fuga, ullam
              deserunt quo, ducimus aliquam maiores.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 py-10 sm:py-20 justify-center items-center">
            <Card />
            <Card />
            <Card />
          </div>
        </div>

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
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5 sm:py-20 justify-center items-center">
            <FoodCard />
            <FoodCard />
            <FoodCard />
          </div>

          <Link to="/meal-plan" className="flex items-center cursor-pointer">
            <span className="text-theme-color text-lg sm:text-2xl font-bold">
              View More
            </span>
            <FontAwesomeIcon
              className="pl-2 w-5 sm:w-6 h-5 sm:h-6 "
              icon={faCircleChevronRight}
            />
          </Link>
        </div>

        <div className="flex w-full px-5 sm:px-20 py-10 bg-[#fff4f4]">
          <div className="w-full sm:w-1/2 flex flex-col sm:gap-10 gap-5">
            <div className="text-2xl text-center sm:text-start sm:text-3xl font-bold">
              It's Now <span className="text-[#f4444c]">More Easy</span> to{" "}
              <span className="text-[#df9f38]">Order</span> by Our Mobile{" "}
              <span className="text-[#f4444c]">App</span>
            </div>
            <p className="font-footer_font font-semibold text-center sm:text-start text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              inventore, modi debitis vero ipsum eos? Harum dolor officia atque,
              porro in maxime eos minus qui esse! Animi tenetur quibusdam vitae.
            </p>
          </div>
          <div></div>
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
