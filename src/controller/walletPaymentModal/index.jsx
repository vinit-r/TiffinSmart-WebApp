import React from "react";
import { useState } from "react";
import Modal from "react-modal";

import Button from "../../shared/button";
import Inputs from "../../shared/input";

import paytmImg from "../../assets/image/paytmLogo.png";

const WalletPaymentModal = (props) => {
  // const { toggleClickOnAddAddress, clickOnAddAddress } = props;
  return (
    <>
      <Modal
        isOpen={true}
        // onRequestClose={() => toggleClickOnAddAddress()}
        className="Modal w-full mx-auto rounded-md outline-none"
        overlayClassName="Overlay fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-10 "
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div className="flex w-full  h-[100vh] justify-end ">
          <div className="bg-white w-full sm:w-2/3 md:w-2/4 lg:w-2/5 xl:w-1/3 h-full flex justify-center overflow-y-auto">
            <div className="w-full pb-16">
              <p className="flex justify-between items-center text-xl md:text-xl lg:text-2xl sm:font-bold font-semibold bg-black text-white w-full py-5 px-5 border-b-4 border-gray-500">
                <span
                  className="cursor-pointer"
                  // onClick={() => toggleClickOnAddAddress()}
                >
                  X
                </span>
                <span className="">Link Your Wallet</span>
                {/* <span className="">Enter your UPI ID</span> */}
              </p>
              <div className=" px-3 sm:px-6 md:px-10 py-2 sm:py-8 w-full">
                <div className="flex justify-between bg-[#f4f4fc] font-semibold sm:font-bold p-2 sm:p-4">
                  <span className="text-theme-color text-base sm:text-lg">
                    Amount To be paid
                  </span>
                  <span> ₹1023.20</span>
                </div>

                <div className="flex justify-center pt-3 sm:pt-10">
                  <img className="h-8" src={paytmImg} alt="" />
                </div>
                <div className="pt-3 sm:pt-5">
                  <p className="text-theme-color font-semibold sm:font-bold text-lg leading-5 sm:leading-0 sm:text-xl ">
                    Enter mobile number to link Paytm wallet
                  </p>

                  <p className="text-xs sm:text-sm font-semibold">
                    If you don’t have an account, we will create one for you
                  </p>
                </div>

                {/* <div className="pt-8 sm:pt-16 text-theme-color font-semibold sm:font-bold text-lg sm:text-xl ">
                  Enter Your UPI ID
                </div> */}

                <div className="pt-2 sm:pt-5 flex flex-col items-center gap-2 w-full">
                  <Inputs inputStyle={"!p-2 sm:!p-3"} />
                  <p className="flex items-center w-full sm:gap-5 gap-3 pb-5 sm:pb-10">
                    <input
                      type="checkbox"
                      className="sm:h-5 sm:w-5 outline-none "
                    />
                    <span className="text-xs sm:text-base">
                      Securely save VPA for future use
                    </span>
                  </p>
                  <Button
                    buttonName={"Confirm & Proceed"}
                    classStyle={"!rounded-sm"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default WalletPaymentModal;
