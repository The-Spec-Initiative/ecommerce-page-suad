import { useState } from "react";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Ingredients from "./ingredients/Ingredients";
import Navbar from "./navbar/Navbar";
import PreFooter from "./prefooter/PreFooter";
import Products, { ProductList } from "./productPage/Products";
import Cart from "./cart/Cart";

function App() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const cartPopUp = cartItems.length;

  function handleOpenCart() {
    setIsOpenCart((val) => !val);
  }

  function handleAddToCart(obj) {
    const item = {
      productName: obj.productName,
      img: obj.img,
      price: obj.price,
      color: obj.color,
      quantity: 1,
    };

    setCartItems((arr) => [...arr, item]);
  }

  return (
    <>
      <div className="sm:mx-10 lg:mx-40">
        <Navbar handleOpenCart={handleOpenCart} cartPopUp={cartPopUp} />
        {isOpenCart && (
          <Cart
            handleOpenCart={handleOpenCart}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        )}
        <Hero />
        <Ingredients />
        <Products>
          <ProductList
            handleAddToCart={handleAddToCart}
            cartItems={cartItems}
          />
        </Products>
        <PreFooter />
      </div>

      <Footer handleOpenCart={handleOpenCart} />
    </>
  );
}

export default App;
