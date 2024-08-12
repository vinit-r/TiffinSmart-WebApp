import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { BsCreditCard2Front } from "react-icons/bs";
import { BsCreditCard2Back } from "react-icons/bs";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TfiWallet } from "react-icons/tfi";
import { BiSolidBank } from "react-icons/bi";

function PaymentLayout() {
  const paymentLink = [
    {
      name: "On Cash Delivery",
      path: ".",
      end: true,
      icon: <FaMoneyBillTransfer className="h-8 w-8 inline-block mr-2" />,
    },
    {
      name: "Debit Card",
      path: "debit-card",
      icon: <BsCreditCard2Front className="h-8 w-8 inline-block mr-2" />,
    },
    {
      name: "Credit Card",
      path: "credit-card",
      icon: <BsCreditCard2Back className="h-8 w-8 inline-block mr-2" />,
    },
    {
      name: "Net Banking",
      path: "net-banking",
      icon: <BiSolidBank className="h-8 w-8 inline-block mr-2" />,
    },
    {
      name: "UPI & Wallets",
      path: "upi-wallets",
      icon: <TfiWallet className="h-8 w-8 inline-block mr-2" />,
    },
  ];

  return (
    <div className="mt-6 w-full">
      <div>
        <h1 className="font-extrabold text-2xl">Payment Method</h1>
      </div>
      <div className="mt-8  flex w-full  shadow-2xl">
        <div className="flex w-full">
          <div className="w-2/4 flex flex-col gap-5 bg-black text-white pt-8 pb-[5rem]">
            {paymentLink.map((link, i) => {
              return (
                <div className="ml-5" key={i}>
                  <NavLink
                    to={link?.path}
                    end={link?.end || false}
                    className={({ isActive }) =>
                      `${
                        isActive ? " bg-white text-black" : null
                      } text-xl  font-semibold px-4 py-5 w-full rounded-l-2xl block`
                    }
                  >
                    {link.icon}
                    {link.name}
                  </NavLink>
                </div>
              );
            })}
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentLayout;
