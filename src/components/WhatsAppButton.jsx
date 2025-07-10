import React from "react";

const WhatsAppButton = ({
  phone = "+905317921674",
  message = "Merhaba, otomatik sulama hizmeti hakkında bilgi almak istiyorum",
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  const handleClick = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
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
      <img src={iconURL} alt="WhatsApp Icon" className="w-5 h-5 rounded-full" />
      {label}
    </button>
  );
};

export default WhatsAppButton;
