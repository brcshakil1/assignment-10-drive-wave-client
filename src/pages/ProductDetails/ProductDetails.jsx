import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { FiDollarSign } from "react-icons/fi";
import { BsFillCartPlusFill } from "react-icons/bs";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const ProductDetails = () => {
  const product = useLoaderData();
  const { user } = useContext(AuthContext);

  const { photo, name, brandName, type, price, shortDescription } = product;

  const handleCart = () => {
    const userCart = {
      photo: product.photo,
      name: product.name,
      brandName: product.brandName,
      type: product.type,
      price: product.price,
      shortDescription: product.shortDescription,
      userEmail: user.email,
    };
    fetch("http://localhost:4000/cart", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Added to cart");
        }
      });
  };
  return (
    <div>
      <Navbar />
      <div className="w-full h-[30px] bg-black" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 text-white">
        <div className="">
          <img className="" src={photo} alt="" />
        </div>
        <div className="bg-[#794E41] p-4 md:p-5">
          <p className="text-xl font-bold ">{brandName}</p>
          <p className="text-sm underline py-2">Type: {type}</p>
          <h2 className="text-3xl font-bold text-white pb-3">{name}</h2>

          <p className="">- {shortDescription}</p>
          <p>
            <span className="flex items-center text-xl md:text-3xl py-3 w-min ">
              <FiDollarSign className="text-2xl pl-1" /> {price}
            </span>
          </p>
          <button
            onClick={handleCart}
            className="relative flex gap-2 items-center justify-center py-2 w-[150px] rounded-[30px] bg-white text-[#794E41] font-semibold group"
          >
            <span className="group-hover:-translate-x-2 left-2 transition-transform">
              Add to cart
            </span>
            <span className="group-hover:opacity-100 opacity-0 duration-300 transition-opacity absolute right-4 top-[22px] transform -translate-y-1/2">
              <BsFillCartPlusFill className="text-[#794E41]" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
