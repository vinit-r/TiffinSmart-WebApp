import React from "react";

const Banner = (props) => {
  const { BannerImg, content } = props;
  const bannerStyle = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3)), url("${BannerImg}")`,
  };
  return (
    <>
      <div
        className="w-full h-full lg:h-[100vh] bg-cover bg-no-repeat"
        style={bannerStyle}
      >
        <div className="w-full px-6 sm:px-20 flex py-20 lg:py-0 items-center h-full text-white">
          {content}
          {/* <div className="flex flex-col sm:w-full lg:w-1/2 gap-4 sm:gap-8">
            <span className="text-xs sm:text-base pt-5 lg:pt-0">
              People Trust Us
            </span>
            <div className=" text-lg sm:text-[3rem] font-bold leading-[1.5rem] sm:leading-[3rem] text-white font-banner-font">
              Be The <span className="text-theme-color">Fastest</span> in{" "}
              <span className="text-theme-color">Delivery</span> Your{" "}
              <span className="text-theme-color">Food</span>
            </div>
            <div className="font-banner-font text-xs sm:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              inventore sint quasi optio dolorum beatae odio vel dolorem minus
              minima? Quo nemo a impedit distinctio exercitationem officiis,
              temporibus eveniet totam!
            </div>
            <div>
              <Button buttonName={"Download App"} classStyle={"!rounded-3xl"} />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Banner;
