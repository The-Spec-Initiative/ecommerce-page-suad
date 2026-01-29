import React, { useState } from "react";
import Button from "../Common/button";
import ImageContainer from "../Common/ImageContainer";
import IconWrapper from "../Common/IconWrapper";
import { Plus, Minus, X } from "lucide-react";

const Cart = ({ handleOpenCart, cartItems, setCartItems }) => {
  function increaseQuantity(obj) {
    setCartItems((items) =>
      items.map((item) =>
        item.productName === obj.productName
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }

  function decreaseQuantity(obj) {
    setCartItems((items) => {
      const product = items.find(
        (item) => item.productName === obj.productName,
      );

      if (product.quantity === 1)
        return items.filter((item) => item.productName !== obj.productName);

      return items.map((item) =>
        item.productName === obj.productName
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      );
    });
  }

  const total = cartItems
    .reduce((preVal, curVal) => (preVal += curVal.price * curVal.quantity), 0)
    .toFixed(2);

  let discountedPrice;
  if (total > 100) discountedPrice = (total - total * 0.1).toFixed(2);

  function handleCheckout() {
    setCartItems([]);
    handleOpenCart();
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm"
        onClick={handleOpenCart}
      />

      <div className="fixed top-3 lg:top-0 left-1/2 -translate-x-1/2 lg:left-[75%] lg:translate-x-0  w-[90%] lg:w-[24rem]   bg-white shadow-black shadow-2xl backdrop-blur-3xl z-50  p-6">
        <div className="flex justify-between">
          <p className="text-xl font-medium">Your Cart</p>
          <IconWrapper icon={X} onClick={handleOpenCart} />
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center py-6 font-semibold text-gray-500">
            Your Cart is empty
          </p>
        ) : (
          <div className="flex flex-col gap-10  my-10 max-h-[18rem] overflow-y-auto">
            {cartItems.map((obj) => (
              <CheckListItem
                obj={obj}
                key={obj.productName}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
              />
            ))}
          </div>
        )}
        {cartItems.length > 0 && (
          <p className="text-xs text-center mb-2 text-gray-400 italic">
            If your total is above Ghc.100 you'll get a 10% discount
          </p>
        )}
        <div className="flex justify-between mb-7">
          <p className="text-xl">Subtotal</p>
          <p className="text-2xl font-semibold">
            {total > 100 ? (
              <>
                <span className=" text-xs mr-1 line-through"> Ghc.{total}</span>
                <span> Ghc.{discountedPrice}</span>
              </>
            ) : (
              "Ghc." + total
            )}
          </p>
        </div>

        <Button className={"w-full"} onClick={handleCheckout}>
          Checkout Now
        </Button>
      </div>
    </>
  );
};

export default Cart;

function CheckListItem({ obj, decreaseQuantity, increaseQuantity }) {
  const [numItems, setNumItems] = useState(obj.quantity);

  const subTotal = obj.price * obj.quantity;

  return (
    <div className="flex gap-5 items-stretch ">
      <ImageContainer
        obj={obj}
        className="h-auto w-[30%]! shrink-0 overflow-hidden"
      />

      <div className="flex flex-1 flex-col justify-between   gap-8 py-1">
        <div className="flex justify-between items-start gap-3 font-medium">
          <p className="text-md leading-tight ">{obj.productName}</p>
          <p className="text-lg">Ghc.{subTotal.toFixed(2)}</p>
        </div>

        <div className=" flex justify-between gap-10 ">
          <IconWrapper
            icon={Minus}
            className="cursor-pointer"
            onClick={() => {
              decreaseQuantity(obj);
              setNumItems((val) => (val > 0 ? val - 1 : val));
            }}
          />
          <input
            type="number"
            value={numItems}
            onChange={(e) => e.target.value}
            id="itemsNum"
            className="w-8 text-center font-medium"
          />
          <IconWrapper
            icon={Plus}
            className="cursor-pointer"
            onClick={() => {
              increaseQuantity(obj);
              setNumItems((val) => val + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}
