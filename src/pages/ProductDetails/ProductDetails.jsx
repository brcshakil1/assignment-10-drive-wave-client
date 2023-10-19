import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { FiDollarSign } from "react-icons/fi";
import { BsFillCartPlusFill } from "react-icons/bs";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);
  const { photo, name, brandName, type, price, shortDescription } = product;
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
          <button className="relative flex gap-2 items-center justify-center py-2 w-[150px] rounded-[30px] bg-white text-[#794E41] font-semibold group">
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
