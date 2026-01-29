import React from "react";

const IconWrapper = ({ icon, onClick }) => {
  const Icon = icon;

  return (
    <button
      className="border cursor-pointer border-gray-300 p-1.25 rounded-full shrink-0 "
      onClick={onClick}
    >
      <Icon size={15} />
    </button>
  );
};

export default IconWrapper;
