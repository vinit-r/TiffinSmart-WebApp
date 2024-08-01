import React from "react";
import cardIcon from "../../assets/image/coffie.png";

const Card = () => {
  return (
    <>
      <div class="text-center flex flex-col items-center max-w-sm rounded-3xl gap-5 overflow-hidden shadow-lg bg-white font-footer_font py-20">
        <img class="w-16 h-16 rounded-full" src={`${cardIcon}`} alt="Icon" />
        <div class="px-6 py-4">
          <div class="font-extrabold text-xl mb-2 text-theme-color">
            Easy To Order
          </div>
          <p class="text-black text-base font-semibold">
            But I must explain to you how all this mistaken idea of denouncing
            pleaser and praising pain was born.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
