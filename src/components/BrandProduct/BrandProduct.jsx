import { PropTypes } from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const BrandProduct = ({ product }) => {
  return (
    <div className=" rounded-lg overflow-hidden">
      <div className="md:grid grid-cols-5 block h-full">
        <div className="  w-full md:col-span-3">
          <img
            className="h-full w-full object-cover"
            src={product?.photo}
            alt=""
          />
        </div>
        <div className=" w-full md:col-span-2 bg-[#363949] text-white p-4 space-y-1 flex flex-col">
          <div className="flex-grow">
            <h2 className="text-xl md:text-2xl font-bold">{product?.name}</h2>
            <h3 className="text-lg font-semibold">
              Brand: {product?.brandName}
            </h3>
            <p className="text-sm font-bold">Type: {product?.type}</p>
            <p className="text-lg py-1">
              - {product?.shortDescription.slice(0, 35)}...
            </p>
            <p className="text-lg">Rating: {product?.rating}</p>
            <span className="flex items-center text-2xl py-2 w-min">
              <FiDollarSign className="text-2xl pl-1" /> {product?.price}
            </span>
          </div>
          <div className="flex justify-between pt-2">
            <Link to={`/productDetails/${product?._id}`}>
              <button className="relative flex gap-2 items-center justify-center py-2 w-[120px] rounded-[30px] bg-white text-[#363949] font-semibold group">
                <span className="group-hover:-translate-x-2 left-2 transition-transform">
                  Explore
                </span>
                <span className="group-hover:opacity-100 opacity-0 duration-300 transition-opacity absolute right-4 top-[22px] transform -translate-y-1/2">
                  <AiOutlineRight className="text-[#363949]" />
                </span>
              </button>
            </Link>
            <Link to={`/updateProduct/${product?._id}`}>
              <button className="relative flex gap-2 items-center justify-center py-2 w-[120px] rounded-[30px] text-white font-semibold group">
                <span className="group-hover:-translate-x-2 left-2 transition-transform">
                  Update
                </span>
                <span className="group-hover:opacity-100 opacity-0 duration-300 transition-opacity absolute right-4 top-[22px] transform -translate-y-1/2">
                  <AiOutlineRight className="text-white" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BrandProduct.propTypes = {
  product: PropTypes.object,
};

export default BrandProduct;
