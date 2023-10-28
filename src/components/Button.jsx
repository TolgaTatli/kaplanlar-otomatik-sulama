import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center 
    items-center gap-2 px-7
    py-4 font-montserrat
    text-lg border leading-none
    ${backgroundColor ? backgroundColor : "bg-coral-red"}
    ${textColor ? textColor : "text-white"}
    ${borderColor ? borderColor : "border-none"}
    ${fullWidth && "w-full"} 
    rounded-full `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;


//     ${fullWidth && "w-full"} 
// fullWidth true ise w-full yap değilse boş bırak