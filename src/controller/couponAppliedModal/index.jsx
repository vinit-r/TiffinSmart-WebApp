import React from "react";
import Modal from "react-modal";

import DiscountIcon from "../../assets/image/modalDiscountIcon.png";

const CouponAppliedModel = (props) => {
  const { setClickApply, clickApply, toggleClickApply } = props;
  return (
    <>
      <Modal
        isOpen={clickApply}
        onRequestClose={() => toggleClickApply()}
        className="Modal w-full mx-auto rounded-md outline-none"
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-10"
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div
          className="relative flex w-full h-[100vh] justify-center items-center px-5"
          onClick={() => toggleClickApply()}
        >
          <div className="w-full sm:w-1/2 lg:w-1/3  bg-white rounded-sm">
            <div className="relative flex flex-col items-center justify-center w-full h-full font-semibold sm:font-bold gap-2 sm:gap-8 px-5 py-5 sm:py-8">
              <img
                className="w-10 h-10 sm:w-16 sm:h-16 absolute top-[-15%]"
                src={DiscountIcon}
                alt=""
              />
              <p className="text-theme-color text-base sm:text-xl">
                ‘ TRYNEW ’ Applied
              </p>
              <p className="flex flex-col items-center gap-1 sm:gap-3">
                <span className="text-base sm:text-2xl font-extrabold">
                  ₹100
                </span>
                <span className="font-footer_font text-gray-500 text-base font-light">
                  Save 100 with this Coupon
                </span>
              </p>

              <p className="font-footer_font text-center text-sm sm:text-base font-light">
                TRYNEW & save every time for you
              </p>
            </div>
            <div className="text-theme-color bg-black text-center py-2 sm:py-3 font-bold text-base sm:text-lg font-footer_font">
              Hooray !!!!
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CouponAppliedModel;
