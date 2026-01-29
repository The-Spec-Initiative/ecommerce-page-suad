import React from "react";
import { imagesObj } from "../../images";

const Navbar = ({ handleOpenCart, cartPopUp }) => {
  return (
    <div className="bg-purple-400/70 backdrop-blur-2xl border-0 rounded-4xl py-3 px-5 flex items-center justify-between text-white sticky top-2 z-50 lg:mx-30 lg:px-10">
      <p className="font-bold">🧴 St.Ives Haven</p>

      <p className=" border-0 px-2 bg-purple-400 rounded-full absolute top-1 right-4 lg:right-8 text-sm font-semibold">
        {cartPopUp}
      </p>
      <button
        className="bg-white p-2 border-0 rounded-full cursor-pointer"
        onClick={handleOpenCart}
      >
        <img src={imagesObj.cart} alt="cart" />
      </button>
    </div>
  );
};

export default Navbar;
