import React from "react";

const Banner = (props) => {
  const { bannerStyle, content, classStyle } = props;
  return (
    <>
      <div
        className={`w-full h-full lg:h-[100vh] bg-cover bg-no-repeat ${classStyle}`}
        style={bannerStyle}
      >
        <div className="w-full px-6 sm:px-20 flex py-20 lg:py-0 items-center h-full text-white">
          {content}
        </div>
      </div>
    </>
  );
};

export default Banner;
