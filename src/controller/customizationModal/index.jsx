import React from "react";
import Modal from "react-modal";
import Button from "../../shared/button";
import { RxCross1 } from "react-icons/rx";

import DiscountIcon from "../../assets/image/modalDiscountIcon.png";

const CustomizationModel = (props) => {
  const { showCustomizationModal, toggleCustomization } = props;
  return (
    <>
      <Modal
        isOpen={showCustomizationModal}
        onRequestClose={() => toggleCustomization()}
        className="Modal w-full mx-auto rounded-md outline-none"
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-10 overflow-y-auto"
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div
          className="relative flex w-full justify-end items-center"
          // onClick={() => toggleClickApply()}
        >
          <div className="w-full sm:w-1/2 xl:w-1/3 h-[100vh]  bg-white rounded-sm">
            <div className=" flex justify-center  bg-gradient-to-r from-white to-[#fff3dc]">
              {/* <div className="px-2 sm:px-5 lg:px-10 xl:px-16 bg-[#e2e2e2]"> */}
              <div className="bg-[#e2e2e2] w-full lg:w-[60vw] shadow-2xl">
                {/* <span className="bg-theme-color p-4 rounded-full h-10"> */}
                <RxCross1
                  className="h-10 w-10 cursor-pointer hover:bg-theme-color p-2"
                  onClick={() => toggleCustomization()}
                />
                {/* </span> */}
                <div className="font-semibold text-lg sm:text-xl flex flex-col justify-between shadow-2xl bg-white ">
                  <div className="flex justify-between px-2 sm:px-5 py-5">
                    <div className="flex gap-2 sm:gap-5 items-center">
                      <p className="p-1 border-[1px] border-green-500">
                        <span className="w-3 h-3 rounded-full bg-green-500 block"></span>
                      </p>
                      <span className="text-theme-color ">Jumbo Feast</span>
                    </div>
                    <p className="flex gap-1 pr-2">
                      Reset{" "}
                      <span className="hidden md:block">Customization</span>
                    </p>
                  </div>
                </div>
                <span className="block font-bold text-base sm:text-lg px-2 sm:px-5 pt-4 sm:pt-8 pb-4 sm:pb-5">
                  Add a Starter
                </span>
                <div className="flex justify-between text-base sm:text-lg font-semibold items-center shadow-2xl bg-white py-5 pl-5 pr-5 sm:pr-16 border-b-2 border-gray-400">
                  <div className="flex gap-2 sm:gap-5 items-center  ">
                    <input
                      type="checkbox"
                      className="w-5 h-5  text-green-400"
                    />
                    <span>Aloo Patice</span>
                  </div>
                  <span>₹ 28</span>
                </div>
                <span className="block font-bold text-base sm:text-lg px-2 sm:px-5 pt-4 sm:pt-8 pb-4 sm:pb-5">
                  Add a Beverages
                </span>
                <div className="flex justify-between text-base sm:text-lg font-semibold items-center shadow-2xl bg-white py-5 pl-5 pr-5 sm:pr-16 border-b-2 border-gray-400">
                  <div className="flex gap-2 sm:gap-5 items-center">
                    <input
                      type="checkbox"
                      className="w-5 h-5  text-green-400"
                    />
                    <span>Jeeva Masala Soda</span>
                  </div>
                  <span>₹ 60</span>
                </div>
                <div className="flex justify-between text-base sm:text-lg font-semibold items-center shadow-2xl bg-white py-5 pl-5 pr-5 sm:pr-16 border-b-2 border-gray-400">
                  <div className="flex gap-2 sm:gap-5 items-center">
                    <input
                      type="checkbox"
                      className="w-5 h-5  text-green-400"
                    />
                    <span>Mint Chaas</span>
                  </div>
                  <span>₹ 28</span>
                </div>
                <span className="block font-bold text-base sm:text-lg px-2 sm:px-5 pt-4 sm:pt-8 pb-4 sm:pb-5">
                  Add a Dessert
                </span>
                <div className="flex justify-between text-base sm:text-lg font-semibold items-center shadow-2xl bg-white py-5 pl-5 pr-5 sm:pr-16 border-b-2 border-gray-400">
                  <div className="flex gap-2 sm:gap-5 items-center">
                    <input
                      type="checkbox"
                      className="w-5 h-5  text-green-400"
                    />
                    <span>Gulab Jamun (Pack of 1)</span>
                  </div>
                  <span>₹ 60</span>
                </div>
                <div className="flex justify-between text-base sm:text-lg font-semibold items-center shadow-2xl bg-white py-5 pl-5 pr-5 sm:pr-16 border-b-2 border-gray-400">
                  <div className="flex gap-2 sm:gap-5 items-center">
                    <input
                      type="checkbox"
                      className="w-5 h-5  text-green-400"
                    />
                    <span>Choco Lava Cake</span>
                  </div>
                  <span>₹ 28</span>
                </div>
                <div className="flex justify-between font-semibold bg-theme-color px-4 text-white items-center py-5  text-lg sm:text-xl">
                  <p>Total ₹ 60</p>
                  <div className="flex  items-center gap-2">
                    {/* <p className="pr-0 sm:pr-10">Add Item</p> */}
                    <Button
                      buttonName={"Add Items"}
                      classStyle={"!bg-white !text-black !text-base"}
                    />
                    {/* <RxCross1 className="h-8 w-8 inline-block mr-2" /> */}
                    {/* <p className="pr-0 sm:pr-10"></p> */}
                    {/* <span className="block sm:hidden">
                      <Button
                        buttonName={"Cancel"}
                        classStyle={"!bg-black/60 !text-base !px-9"}
                        handleClick={() => toggleCustomization()}
                      />
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CustomizationModel;
