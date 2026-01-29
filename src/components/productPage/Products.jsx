import React, { useState } from "react";
import Label from "../Common/Label";
import Button from "../Common/button";
import { productsData } from "../../data/productsData";
import ImageContainer from "../Common/ImageContainer";

const Products = ({ children }) => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <Label id={"products"}>Products</Label>
      {children}
    </div>
  );
};

export default Products;

export function ProductList({ handleAddToCart, cartItems }) {
  return (
    <ul className="mt-8 grid grid-cols-2 lg:grid-cols-3 items-stretch gap-5">
      {productsData.map((obj) => (
        <ProductItem
          key={obj.productName}
          obj={obj}
          handleAddToCart={handleAddToCart}
          cartItems={cartItems}
        />
      ))}
    </ul>
  );
}

function ProductItem({ obj, handleAddToCart, cartItems }) {
  const [isClicked, setIsClicked] = useState(false);

  const isInCart = cartItems?.some(
    (item) => item?.productName === obj?.productName,
  );

  return (
    <li className="h-full flex flex-col items-center  flex-1 ">
      <ImageContainer obj={obj} />
      <div className="pt-4 flex flex-col h-full w-full gap-6">
        <div>
          <p className="text-xl">{obj.productName}</p>
          <p className="text-gray-400 text-sm line-clamp-2">
            {obj.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3   mt-auto">
          <p className="text-lg font-semibold">Ghc.{obj.price}</p>
          <Button
            className={`text-xs px-0! ${isClicked && isInCart ? "pointer-events-none bg-black/60" : ""} `}
            onClick={() => {
              setIsClicked(true);
              handleAddToCart(obj);
            }}
          >
            {isClicked && isInCart ? "Added" : " Add to Cart"}
          </Button>
        </div>
      </div>
    </li>
  );
}
