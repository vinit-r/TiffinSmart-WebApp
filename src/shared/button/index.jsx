import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { buttonName, classStyle, icon, handleClick, to, iconStyle } = props;
  return (
    <>
      <Link
        className={`bg-theme-color inline-block text-xs sm:text-base py-2 px-6 sm:px-4 rounded-md font-semibold cursor-pointer text-white ${classStyle}`}
        onClick={handleClick}
        to={to}
      >
        {icon ? (
          <FontAwesomeIcon className={`pr-2 ${iconStyle}`} icon={icon} />
        ) : (
          ""
        )}
        <button>{buttonName}</button>
      </Link>
    </>
  );
};

export default Button;
