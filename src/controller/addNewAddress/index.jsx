import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { RxCross1 } from "react-icons/rx";

import Button from "../../shared/button";
import Inputs from "../../shared/input";

import MapImg from "../../assets/image/map.png";

const AddNewAddress = (props) => {
  const { toggleClickOnAddAddress, clickOnAddAddress } = props;
  return (
    <>
      <Modal
        isOpen={clickOnAddAddress}
        onRequestClose={() => toggleClickOnAddAddress()}
        className="Modal w-full mx-auto rounded-md outline-none"
        overlayClassName="Overlay fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-10 overflow-y-auto"
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div className="flex w-full h-full justify-start">
          <div className="bg-white w-full sm:w-2/3 md:w-2/4 lg:w-2/5 xl:w-1/3 h-full flex justify-center ">
            <div className="w-full pb-16">
              <p className="flex justify-between items-center text-xl md:text-xl lg:text-2xl sm:font-bold font-semibold bg-black text-white w-full py-5 px-5 border-b-4 border-gray-500">
                <span className="">Save New Address</span>
                {/* <span
                  className="cursor-pointer"
                  onClick={() => toggleClickOnAddAddress()}
                >
                  X
                </span> */}
                <RxCross1
                  className="h-8 w-8 cursor-pointer hover:bg-theme-color"
                  onClick={() => toggleClickOnAddAddress()}
                />
              </p>
              <div className="px-5 py-3 w-full">
                <img src={MapImg} alt="map" />
                <div className="pt-5 flex flex-col gap-8">
                  <Inputs
                    label={"Address"}
                    labelStyle={"text-theme-color font-bold pb-2"}
                    value={
                      "53MB, Veena Nagar, DDU Nagar, Sukhlia, Indore, Madhya Pradesh 452003, India"
                    }
                  />
                  <Inputs
                    label={"Door/Flat No"}
                    labelStyle={"text-theme-color font-bold pb-2"}
                  />
                  <Inputs
                    label={"Landmark"}
                    labelStyle={"text-theme-color font-bold pb-2"}
                  />
                </div>
                <div className="flex flex-row justify-center gap-3 pt-5">
                  <Button buttonName={"HOME"} />
                  <Button buttonName={"WORK"} />
                  <Button buttonName={"OTHER"} />
                </div>
                <div className="pt-5">
                  <Inputs
                    label={"Name"}
                    labelStyle={"text-theme-color font-bold pb-2"}
                  />
                </div>
                <span className="w-full flex pt-16 justify-center px-5">
                  <Button
                    buttonName={"Save & Proceed"}
                    classStyle={"w-full flex justify-center"}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddNewAddress;
