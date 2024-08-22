import React from "react";
import { useState } from "react";
import WalletPaymentModal from "../walletPaymentModal";

import Button from "../../shared/button";
import Paytm from "../../assets/image/Paytm.png";
import Amazon from "../../assets/image/Amazon.png";
import PhonePay from "../../assets/image/PhonePay.png";
import Mobikwik from "../../assets/image/Mobikwik.png";
import Google from "../../assets/image/Google.png";
import Plus from "../../assets/image/Sum.png";

const banks = [
  {
    icon: `${Paytm}`,
    btnName: "Select",
    classStyle: "h-16 mb-2 w-16",
  },
  {
    icon: `${Amazon}`,
    btnName: "Select",
  },
  {
    icon: `${PhonePay}`,
    btnName: "Select",
  },
  {
    icon: `${Mobikwik}`,
    btnName: "Select",
  },
];

function UPIandWallets() {
  const [showUpiOrWalletModal, setShowUpiOrWalletModal] = useState(false);
  const [type, setType] = useState("");

  const toggleUpiOrWalletModal = () => {
    type: "wallet", setShowUpiOrWalletModal(!showUpiOrWalletModal);
  };

  return (
    <div className="w-full  ">
      <div className="p-2 ">
        <div className="">
          <h1 className="font-bold text-xl text-theme-color">
            Pay using Wallet/UPI
          </h1>
          <div className="flex-col">
            <div className="mr-4 mt-7">
              <h1 className="font-extrabold text-xl">Wallets</h1>
            </div>
            <div className="flex mt-7 justify-between border-r-0 border-[1.5px] border-dashed border-black">
              {banks.map((bank, i) => {
                return (
                  <div
                    key={i}
                    className="border-r-[1.5px] flex flex-col items-center justify-between border-dashed border-black p-4"
                  >
                    <img
                      className={`block${bank?.classStyle} `}
                      src={bank.icon}
                      alt=""
                    />
                    <Button
                      buttonName={bank.btnName}
                      classStyle="!px-6 !bg-green-600 !mt-4 !py-1 block "
                      handleClick={() => {
                        toggleUpiOrWalletModal(), setType("wallet");
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-6">
              <h1 className="font-bold text-lg">UPI</h1>

              <div className="flex h-24 border-[1.5px] border-dashed border-black w-80 p-2">
                <img src={Google} className="h-12 " alt="" />
                <h1 className="font-bold mt-2 text-2xl">Google Pay</h1>
              </div>
              <div className="w-80 flex justify-center">
                <Button
                  buttonName="Pay via Google Pay"
                  classStyle="!bg-green-600  !py-1 !font-bold -mt-5 !px-7"
                  handleClick={() => {
                    toggleUpiOrWalletModal(), setType("upi");
                  }}
                />
              </div>
              <div className="mt-7">
                <div className="flex">
                  <img src={Plus} alt="" />
                  <h1 className="text-theme-color ml-1 font-bold text-lg">
                    Add New UPI Address
                  </h1>
                </div>
                <h1 className="font-banner-font text-sm font-bold ml-8">
                  You need to have register UPI ID
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        <WalletPaymentModal
          toggleUpiOrWalletModal={toggleUpiOrWalletModal}
          showUpiOrWalletModal={showUpiOrWalletModal}
          type={type}
        />
      }
    </div>
  );
}

export default UPIandWallets;
