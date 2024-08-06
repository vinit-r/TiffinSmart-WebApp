import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Button = (props) => {
  const { buttonName, classStyle, icon, handleClick, to, iconStyle } = props;
  return (
    <>
      <div
        className={`bg-theme-color text-xs sm:text-base py-2 !px-6 sm:px-4 rounded-md inline-block font-semibold text-white ${classStyle}`}
        // onClick={handleClick}
      >
        {icon ? (
          <FontAwesomeIcon className={`pr-2 ${iconStyle}`} icon={icon} />
        ) : (
          ""
        )}
        <Link onClick={handleClick} to={to}>
          {buttonName}
        </Link>
        {/* <button onClick={handleClick}>{buttonName}</button> */}
      </div>
    </>
  );
};

export default Button;
