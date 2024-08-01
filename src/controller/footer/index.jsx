import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import Button from "../../shared/button";

const legalList = [
  { name: "Cookie Policy", link: "" },
  { name: "Terms of Use", link: "" },
  { name: "Privacy Policy", ink: "" },
  { name: "Sitemap", link: "" },
];
const companyList = [
  { name: "About Us", link: "" },
  { name: "Service Us", link: "" },
  { name: "Contact", link: "" },
  { name: "Company", link: "" },
];

const Footer = () => {
  return (
    <>
      <div className="w-full h-full bg-black flex flex-col justify-center text-white font-footer_font">
        <div className="grid grid-cols-1 text-center sm:text-start sm:grid-cols-2 lg:flex justify-between gap-5 py-20 px-4 lg:px-24 sm:px-16">
          <div className="flex flex-col gap-5 w-full">
            <span className="block text-3xl font-semibold text-theme-color">
              Tifinsmart
            </span>
            <p className="block">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
              similique, eaque alias quae.
            </p>
            <div className="flex justify-center sm:justify-start gap-4 text-theme-color text-2xl">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faXTwitter} />
            </div>
          </div>

          <div className="flex w-full gap-5 justify-between">
            <div className="flex items-center flex-col gap-5 w-full">
              <span className="block text-2xl font-semibold text-theme-color">
                Company
              </span>
              <div className="flex flex-col gap-2">
                {companyList?.map((list) => {
                  return (
                    <>
                      <Link to={list?.link}>{list?.name}</Link>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full">
              <span className="block text-2xl font-semibold text-theme-color">
                Legal
              </span>

              <div className="flex flex-col gap-2">
                {legalList?.map((items) => {
                  return (
                    <>
                      <Link to={items?.link}>{items?.name}</Link>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <span className="block text-2xl font-semibold text-theme-color">
              Get in touch
            </span>
            <p className="block">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
              similique, eaque alias quae.
            </p>
            <div className="flex justify-center sm:justify-start gap-3">
              <label
                htmlFor="email"
                className="flex flex-row items-center justify-center gap-2 font-normal rounded-md "
              >
                <input
                  className="form-input w-44 py-3 px-4 outline-none shadow-[0px_5px_12px_0px_rgba(0,0,0,0.3)] bg-[#171717] rounded-3xl"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </label>
              <Button
                buttonName={"Subscribe"}
                classStyle={
                  "!rounded-3xl !font-normal !py-2 sm:!py-3 !px-3 sm:!px-5"
                }
              />
              {/* <button className="bg-theme-color py-3 px-5 rounded-3xl">
                Subscribe
              </button> */}
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-10 font-primary-font">
          Copyright &copy; 2023{" "}
          <span className="text-theme-color pl-1 font-semibold">
            {" "}
            Tifinsmart
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
