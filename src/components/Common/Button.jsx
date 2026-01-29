import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-black text-white py-2 border-0 rounded-4xl w-40 text-center text-lg cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
