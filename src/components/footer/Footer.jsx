import React from "react";

const Footer = ({ handleOpenCart }) => {
  return (
    <div className="bg-gray-100 mt-10 -mx-6  p-4">
      <div className=" flex flex-col lg:flex-row lg:justify-around gap-2 items-center &>*:cursor-pointer">
        <a href="https://wa.me/233203746768">Contact Us</a>
        <a href="#products"> Products</a>
        <a onClick={handleOpenCart} className="cursor-pointer">
          View your Cart
        </a>
      </div>

      <p className="text-gray-500 text-xs">{"\u00A9"} St.Ives Haven </p>
    </div>
  );
};

export default Footer;
