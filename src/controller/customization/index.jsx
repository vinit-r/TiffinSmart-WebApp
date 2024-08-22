import React from "react";

const Customization = () => {
  return (
    <>
      <div className=" flex justify-center pt-16 sm:pt-24 pb-10 bg-gradient-to-r from-white to-[#fff3dc]">
        {/* <div className="px-2 sm:px-5 lg:px-10 xl:px-16 bg-[#e2e2e2]"> */}
        <div className="bg-[#e2e2e2] w-full lg:w-[60vw] shadow-2xl">
          <div className="font-semibold text-base sm:text-xl flex justify-between items-center shadow-2xl bg-white px-2 sm:px-5 py-5">
            <div className="flex gap-2 sm:gap-5 items-center">
              <p className="p-1 border-[1px] border-green-500">
                <span className="w-3 h-3 rounded-full bg-green-500 block"></span>
              </p>
              <span className="text-theme-color ">Jumbo Feast</span>
            </div>
            <p>Reset Customization</p>
          </div>
          <span className="block font-bold text-base sm:text-xl px-2 sm:px-5 pt-4 sm:pt-8 pb-4 sm:pb-5">
            Add a Starter
          </span>
          <div className="flex justify-between text-base sm:text-xl font-semibold items-center shadow-2xl bg-white py-5 pl-5 pr-5 sm:pr-16 border-b-2 border-gray-400">
            <div className="flex gap-2 sm:gap-5 items-center  ">
              <input
                type="checkbox"
                className="w-5 h-5 sm:w-7 sm:h-7 text-green-400"
              />
              <span>Aloo Patice</span>
            </div>
            <span>₹ 28</span>
          </div>
          <span className="block font-bold text-base sm:text-xl px-2 sm:px-5 pt-4 sm:pt-8 pb-4 sm:pb-5">
            Add a Beverages
          </span>
          <div className="flex justify-between text-base sm:text-xl font-semibold items-center shadow-2xl bg-white py-5 pl-5 pr-5 sm:pr-16 border-b-2 border-gray-400">
            <div className="flex gap-2 sm:gap-5 items-center">
              <input
                type="checkbox"
                className="w-5 h-5 sm:w-7 sm:h-7 text-green-400"
              />
              <span>Jeeva Masala Soda</span>
            </div>
            <span>₹ 60</span>
          </div>
          <div className="flex justify-between text-base sm:text-xl font-semibold items-center shadow-2xl bg-white py-5 pl-5 pr-5 sm:pr-16 border-b-2 border-gray-400">
            <div className="flex gap-2 sm:gap-5 items-center">
              <input
                type="checkbox"
                className="w-5 h-5 sm:w-7 sm:h-7 text-green-400"
              />
              <span>Mint Chaas</span>
            </div>
            <span>₹ 28</span>
          </div>
          <span className="block font-bold text-base sm:text-xl px-2 sm:px-5 pt-4 sm:pt-8 pb-4 sm:pb-5">
            Add a Dessert
          </span>
          <div className="flex justify-between text-base sm:text-xl font-semibold items-center shadow-2xl bg-white py-5 pl-5 pr-5 sm:pr-16 border-b-2 border-gray-400">
            <div className="flex gap-2 sm:gap-5 items-center">
              <input
                type="checkbox"
                className="w-5 h-5 sm:w-7 sm:h-7 text-green-400"
              />
              <span>Gulab Jamun (Pack of 1)</span>
            </div>
            <span>₹ 60</span>
          </div>
          <div className="flex justify-between text-base sm:text-xl font-semibold items-center shadow-2xl bg-white py-5 pl-5 pr-5 sm:pr-16 border-b-2 border-gray-400">
            <div className="flex gap-2 sm:gap-5 items-center">
              <input
                type="checkbox"
                className="w-5 h-5 sm:w-7 sm:h-7 text-green-400"
              />
              <span>Choco Lava Cake</span>
            </div>
            <span>₹ 28</span>
          </div>
          <div className="flex justify-between font-semibold bg-theme-color px-4 text-white items-center py-5 sm:py-7 text-base sm:text-xl">
            <p>Total ₹ 60</p>
            <p className="pr-0 sm:pr-10">Add Item</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customization;
