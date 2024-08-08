import React from "react";

const Customization = () => {
  return (
    <>
      <div className="">
        {/* <div className="px-2 sm:px-5 lg:px-10 xl:px-16 bg-[#e2e2e2]"> */}
        <div className="bg-[#e2e2e2]">
          <div className="font-semibold  text-xl flex justify-between items-center shadow-2xl bg-white p-5">
            <div className="flex gap-5 items-center">
              <p className="p-1 border-[1px] border-green-500">
                <span className="w-3 h-3 rounded-full bg-green-500 block"></span>
              </p>
              <span className="text-theme-color ">Jumbo Feast</span>
            </div>
            <p>Reset Customization</p>
          </div>
          <span className="block font-bold text-xl px-5 pt-8 pb-5">
            Add a Starter
          </span>
          <div className="flex justify-between text-xl font-semibold items-center shadow-2xl bg-white py-5 pl-5 pr-16">
            <div className="flex gap-5 items-center  ">
              <input type="checkbox" className="w-7 h-7 text-green-400" />
              <span>Aloo Patice</span>
            </div>
            <span>₹ 28</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customization;
