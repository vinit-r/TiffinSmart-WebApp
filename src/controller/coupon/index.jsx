import React from "react";
import { useState } from "react";
import Modal from "react-modal";

import CouponAppliedModel from "../couponAppliedModal";
import Button from "../../shared/button";

import CloseIcon from "../../assets/image/close.png";
import Logo from "../../assets/image/tsLogo.png";

const CouponModel = (props) => {
  const { toggleShowCoupon, showCoupon } = props;

  const [clickApply, setClickApply] = useState(false);
  const toggleClickApply = () => {
    setClickApply(!clickApply);
  };
  return (
    <>
      <Modal
        isOpen={showCoupon}
        onRequestClose={() => toggleShowCoupon()}
        // className={`flex flex-col relative w-full mx-auto rounded-md outline-none`}
        className="Modal w-full mx-auto rounded-md outline-none"
        // overlayClassName={`fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-10 overflow-y-scroll`}
        overlayClassName="Overlay fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-10 "
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div className="flex w-full h-full justify-end">
          <div className="bg-white w-full sm:w-2/3 md:w-2/4 lg:w-2/5 xl:w-1/3 h-full flex justify-center py-5 sm:py-10 sm:px-5 px-3 overflow-y-scroll">
            <div className="flex flex-col">
              <img
                className="h-5 w-7 sm:h-7 sm:w-9 cursor-pointer"
                src={CloseIcon}
                alt=""
                onClick={() => toggleShowCoupon()}
              />
              <div className="flex flex-col gap-4 pt-5 !font-footer_font">
                <span className="text-theme-color font-bold ">
                  Have a Coupon Code?
                </span>
                <div className="flex flex-row">
                  <input
                    className="sm:px-2 px-1 sm:py-3 py-2 bg-[#e2e2e2] outline-none"
                    type="text"
                    placeholder="Enter Coupon Code"
                  />
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setClickApply(true);
                    }}
                  >
                    <Button
                      buttonName={"Apply"}
                      classStyle={"!py-2 sm:!py-3 !px-3 sm:!px-10 rounded-none"}
                      //   handleClick={}
                    />
                  </span>
                </div>
              </div>
              <div className="pt-10">
                <div className="border border-dotted border-black p-4">
                  <span className="font-bold">Available Coupons</span>
                  <div className="flex gap-[1px] pt-8">
                    <p className="bg-[#f8ccac] flex justify-center w-auto">
                      <img className="w-10 h-12 p-2" src={Logo} alt="" />
                    </p>
                    <p className="bg-[#f8ccac] flex items-center w-auto px-6 font-bold">
                      TRYNEW
                    </p>
                  </div>
                  <span className="text-theme-color font-bold font-footer_font py-5 block">
                    Get 50% off
                  </span>
                  <p>
                    Use code TRYNEW & get 50% off on orders above ₹149. Maximum
                    discount: ₹100.
                  </p>
                  <div className="py-5">
                    <p>Terms and Conditions</p>
                    <ul className="list-disc pl-5">
                      <li>Offer is valid only on select restaurants</li>
                      <li>
                        Coupon code can be applied only once in 2 hr on this
                        restaurant
                      </li>
                      <li>Other T&Cs may apply</li>
                      <li>Offer valid till Dec 31, 2023 11:59 PM</li>
                    </ul>
                  </div>
                  <p className="font-bold">View Less (-)</p>
                  <span className="block py-5">
                    <Button
                      buttonName={"Apply Coupon"}
                      classStyle={"!px-10 !rounded-sm"}
                    />
                  </span>
                </div>
                <div className="border border-dotted border-black p-4">
                  <span className="font-bold">Available Coupons</span>
                  <div className="flex gap-[1px] pt-8">
                    <p className="bg-[#f8ccac] flex justify-center w-auto">
                      <img className="w-10 h-12 p-2" src={Logo} alt="" />
                    </p>
                    <p className="bg-[#f8ccac] flex items-center w-auto px-6 font-bold">
                      TRYNEW
                    </p>
                  </div>
                  <span className="text-theme-color font-bold font-footer_font py-5 block">
                    Get 50% off
                  </span>
                  <p>
                    Use code TRYNEW & get 50% off on orders above ₹149. Maximum
                    discount: ₹100.
                  </p>

                  <p className="font-bold pt-5">View Less (-)</p>
                  <span className="block py-5">
                    <Button
                      buttonName={"Apply Coupon"}
                      classStyle={"!px-10 !rounded-sm"}
                    />
                  </span>
                </div>
                <div className="border border-dotted border-black p-4">
                  <span className="font-bold">Available Coupons</span>
                  <div className="flex gap-[1px] pt-8">
                    <p className="bg-[#f8ccac] flex justify-center w-auto">
                      <img className="w-10 h-12 p-2" src={Logo} alt="" />
                    </p>
                    <p className="bg-[#f8ccac] flex items-center w-auto px-6 font-bold">
                      TRYNEW
                    </p>
                  </div>
                  <span className="text-theme-color font-bold font-footer_font py-5 block">
                    Get 50% off
                  </span>
                  <p>
                    Use code TRYNEW & get 50% off on orders above ₹149. Maximum
                    discount: ₹100.
                  </p>

                  <p className="font-bold pt-5">View Less (-)</p>
                  <span className="block py-5">
                    <Button
                      buttonName={"Apply Coupon"}
                      classStyle={"!px-10 !rounded-sm"}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {
            <CouponAppliedModel
              setClickApply={setClickApply} //FIXME
              clickApply={clickApply}
              toggleClickApply={toggleClickApply}
            />
          }
        </div>
      </Modal>
    </>
  );
};

export default CouponModel;
