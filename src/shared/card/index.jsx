import React from "react";

const Card = (props) => {
  const { icon, title, text } = props;
  return (
    <>
      <div className="text-center flex flex-col items-center max-w-sm rounded-3xl gap-5 overflow-hidden shadow-lg bg-white font-footer_font py-10 sm:py-20">
        <img className="w-16 h-16 rounded-full" src={`${icon}`} alt="Icon" />
        <div className="px-6 py-4">
          <div className="font-extrabold text-xl mb-2 text-theme-color">
            {title}
          </div>
          <p className="text-black text-base font-light">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
