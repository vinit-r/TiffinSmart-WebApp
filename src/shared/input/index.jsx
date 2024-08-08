import React from "react";

const Inputs = (props) => {
  const {
    label,
    placeholder,
    handleOnChange,
    type,
    value,
    name,
    inputStyle,
    labelStyle,
  } = props;
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className={`${labelStyle}`}>{label}</label>}
      {/* <div className={`${labelStyle}`}> */}
      <div className="">
        <input
          value={value}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handleOnChange}
          className={`w-full bg-[#f4f4fc] outline-none shadow-md p-2 ${inputStyle}`}
        />
      </div>
    </div>
  );
};

export default Inputs;
