import React from "react";
import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import ProfileImg from "../../assets/image/profileImg.png";
import Button from "../../shared/button";
import debounce from "lodash.debounce";

import OrderImg from "../../assets/image/order.png";
import WalletImg from "../../assets/image/wallet.png";
import PaymentImg from "../../assets/image/payment.png";
import AddressImg from "../../assets/image/profileAddressIcon.png";
import SettingsImg from "../../assets/image/setting.png";

const options = [
  {
    name: "Order",
    icon: OrderImg,
    // link: "/order",
    end: true,
  },
  {
    name: "Wallet",
    icon: WalletImg,
    // link: "/wallet",
  },
  {
    name: "Payment",
    icon: PaymentImg,
    // link: "/payment",
  },
  {
    name: "Address",
    icon: AddressImg,
    // link: "/order",
  },
  {
    name: "Settings",
    icon: SettingsImg,
    // link: "/order",
  },
];

const Profile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(
    debounce(() => {
      if (window.innerWidth < 640) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      <div className="flex justify-center pt-16 sm:pt-24 pb-10 bg-[#faf6f5] w-full px-1 sm:px-5 lg:px-10">
        <div className="w-full">
          <div className="flex justify-between py-5 ">
            <div className="flex gap-1 sm:gap-3 ">
              <img
                className="w-8 h-8 sm:h-auto sm:w-12 rounded-full"
                src={ProfileImg}
                alt="profile image"
              />
              <p className="flex flex-col ">
                <span className="text-theme-color font-semibold sm:font-bold">
                  Shivani Tanwar
                </span>
                <span className="font-semibold text-xs sm:text-sm">
                  +91-7008156310
                </span>
              </p>
            </div>
            <span>
              <Button
                buttonName={"EDIT PROFILE"}
                classStyle={
                  "!bg-white !border-[1px] !border-theme-color !rounded-sm !text-black"
                }
              />
            </span>
          </div>
          <div className="flex flex-col sm:flex-row bg-white px-1 sm:px-5 py-3 sm:py-10 shadow-2xl">
            <div className="w-full sm:w-2/3 lg:w-2/6 xl:w-2/6 bg-[#faf6f5] shadow-2xl">
              <div className="flex flex-row sm:flex-col justify-center gap-[5px] sm:gap-3 pt-2 sm:pt-10 pb-5 sm:pb-20 ml-0 sm:ml-4 md:ml-10">
                {options?.map((data) => {
                  return (
                    <NavLink
                      end={data?.end || false}
                      className={({ isActive }) =>
                        `flex ${
                          isActive ? "bg-gray-700/20" : null
                        } items-center text-center text-sm sm:text-base gap-1 md:gap-5 font-semibold py-1 sm:py-4 px-1 sm:px-5 rounded-sm sm:rounded-none sm:rounded-l-2xl cursor-pointer `
                      }
                    >
                      {isMobile ? (
                        ""
                      ) : (
                        <img
                          className="h-5 w-5 p-[2px] object-contain"
                          src={data?.icon}
                          alt=""
                        />
                      )}

                      <span className="">{data?.name}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className="w-full ">hjwfhjadfhbdhb</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
