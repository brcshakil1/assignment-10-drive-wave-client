import { useLoaderData } from "react-router-dom";
import CartProduct from "../CartProduct/CartProduct";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";

const MyCart = () => {
  const loadedCartProducts = useLoaderData();
  const [cartProducts, setCartProducts] = useState(loadedCartProducts);
  console.log(cartProducts);
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Navbar />
      <div className="py-10">
        {cartProducts.map((cart) => (
          <CartProduct
            key={cart?._id}
            cart={cart}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCart;
