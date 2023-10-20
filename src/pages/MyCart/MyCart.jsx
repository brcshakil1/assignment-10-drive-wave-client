import { useLoaderData } from "react-router-dom";
// import CartProduct from "../CartProduct/CartProduct";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import CartProduct from "../CartProduct/CartProduct";

const MyCart = () => {
  const loadedCartProducts = useLoaderData();
  const [userCartProducts, setUserCartProducts] = useState([]);
  console.log(userCartProducts);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const filter = loadedCartProducts.filter(
      (cartPd) => cartPd.userEmail === user.email
    );
    setUserCartProducts(filter);
  }, [loadedCartProducts, user]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Navbar />
      <div className="py-10">
        {userCartProducts.map((cart) => (
          <CartProduct
            key={cart._id}
            cart={cart}
            userCartProducts={userCartProducts}
            setUserCartProducts={setUserCartProducts}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCart;
