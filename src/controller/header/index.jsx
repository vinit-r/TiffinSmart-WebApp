import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/image/tsLogo.png";
import HelpIcon from "../../assets/image/helpIcon.png";
import cartIcon from "../../assets/image/cartIcon.png";
import signUpIcon from "../../assets/image/loginIcon.png";

const navItem = [
  {
    id: "01",
    name: "Help",
    icon: HelpIcon,
    link: "help",
  },
  {
    id: "02",
    name: "Cart",
    icon: cartIcon,
    link: "",
  },
  {
    id: "03",
    name: "Sign In",
    icon: signUpIcon,
    link: "",
  },
];

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleShowSearch = () => {
    setShowSearch((prevState) => !prevState);
  };

  const handleResize = useCallback(
    debounce(() => {
      if (window.innerWidth < 1024) {
        setShowMenu(false);
      }
    }, 0),
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
      <div className="fixed top-0 w-full md:text-lg text-sm font-semibold border-b-[1px] border-gray-400 bg-white z-10">
        <div className="w-full flex lg:flex-row flex-col justify-between sm:gap-5 lg:gap-0 sm:my-4 my-2 px-0 sm:px-4">
          {/* left */}

          <div className="flex justify-between items-center gap-3">
            <div className="font-normal flex gap-2 items-center">
              <img
                className="sm:w-10 w-8 sm:h-14 h-12"
                src={`${Logo}`}
                alt="Tiffin Smart Logo"
              />
              <span className="font-semibold border-b-2 border-[#e43204] pb-[0.5px]">
                Pardesipura
              </span>
              {"  "}
              Electronic Complex
            </div>

            {/* search for md screen  */}
            <div className="lg:hidden flex justify-between cursor-pointer">
              <div className="hidden md:flex flex-row items-center gap-3">
                <label
                  htmlFor="search"
                  className="flex flex-row items-center justify-center gap-2 font-normal rounded-md"
                >
                  <FontAwesomeIcon
                    className="py-2"
                    icon={faMagnifyingGlass}
                    // onClick={toggleShowSearch}
                  />
                  {/* {showSearch && ( */}
                  <input
                    className="form-input w-full py-1 px-3 outline-none rounded-md shadow-[0px_5px_12px_0px_rgba(0,0,0,0.3)]"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                  />
                  {/* )} */}
                </label>
              </div>
              {/* menu bar for sm screen  */}
              <div
                className=" lg:p-7 p-3 items-center cursor-pointer "
                onClick={toggleShowMenu}
              >
                {showMenu ? (
                  <FontAwesomeIcon icon={faXmark} />
                ) : (
                  <FontAwesomeIcon icon={faBars} />
                )}
              </div>
            </div>
          </div>

          {/* right */}
          <div
            className={`${
              showMenu ? "block" : "hidden"
            } lg:flex lg:flex-row flex-col lg:gap-10 gap-0 justify-center items-center`}
          >
            <div className="md:flex flex-row items-center gap-3 px-3 py-2 lg:p-0 mb-0 sm:mb-3 lg:mb-0">
              <label
                htmlFor="search"
                className="flex flex-row items-center gap-2 font-normal rounded-md"
              >
                <FontAwesomeIcon
                  className="py-2 cursor-pointer"
                  icon={faMagnifyingGlass}
                  onClick={toggleShowSearch}
                />
                {showSearch && (
                  <input
                    className="form-input md:full py-1 px-3 outline-none rounded-md shadow-[0px_5px_12px_0px_rgba(0,0,0,0.3)]"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                  />
                )}
              </label>
            </div>
            {navItem?.map((items) => {
              return (
                <div key={items.id}>
                  <Link
                    className="flex flex-row items-center gap-2 p-3 lg:p-0 mb-0 sm:mb-3 lg:mb-0"
                    to={items?.link}
                    onClick={() => setShowMenu(false)}
                  >
                    {/* <FontAwesomeIcon icon={items?.icon} /> */}
                    <img className="w-6 h-6" src={`${items?.icon}`} alt="" />
                    <p>{items?.name}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
