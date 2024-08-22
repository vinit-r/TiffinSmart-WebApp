import React from "react";
import Button from "../../shared/button";
import AXIS from "../../assets/image/AXIS.png";
import HDFC from "../../assets/image/HDFC.png";
import SBI from "../../assets/image/SBI.png";
import ICICI from "../../assets/image/ICICI.png";

const banks = [
  {
    icon: `${SBI}`,
    btnName: "Select",
  },
  {
    icon: `${AXIS}`,
    btnName: "Select",
  },
  {
    icon: `${ICICI}`,
    btnName: "Select",
  },
  {
    icon: `${HDFC}`,
    btnName: "Select",
  },
];
function NetBanking() {
  return (
    <div className="w-full  ">
      <div className="p-2 ">
        <div className="">
          <h1 className="font-bold text-xl text-theme-color">
            Pay using Net Banking
          </h1>
          <div className="flex-col">
            <div className="mr-4 mt-7">
              <h1 className="font-extrabold text-xl">Popular Banks</h1>
            </div>
            <div className="flex mt-7 justify-between border-dashed border-black border-r-0 border-[1.5px]">
              {banks.map((bank, i) => {
                return (
                  <div
                    key={i}
                    className=" flex flex-col border-r-[1.5px] items-center justify-between w-full border-dashed border-black p-4"
                  >
                    <img className="block" src={bank.icon} alt="" />
                    <Button
                      buttonName={bank.btnName}
                      classStyle="!px-6 !bg-green-600 !mt-3 !py-1 block "
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-6">
              <label htmlFor="bank" className="font-bold">
                Other Bank
              </label>
              <select
                name=""
                id="bank"
                className="w-full bg-slate-100 mt-2 h-12 outline-none"
              >
                <option value=""> </option>
                <option value=""> Bank </option>
                <option value=""> Bank </option>
                <option value=""> Bank </option>
                <option value=""> Bank </option>
              </select>
            </div>
            <div className="mt-6 flex justify-end">
              <Button
                buttonName={"Pay Now"}
                classStyle={
                  "!rounded-none !bg-red-950 !text-slate-500 hover:!text-white !px-6 !py-3"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetBanking;
