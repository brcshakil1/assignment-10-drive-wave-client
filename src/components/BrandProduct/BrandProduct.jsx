import { PropTypes } from "prop-types";
import { FiDollarSign } from "react-icons/fi";

const BrandProduct = ({ product }) => {
  console.log(product);
  return (
    <div className=" rounded-lg overflow-hidden">
      <div className="md:grid grid-cols-5 block">
        <div className="h-[300px] w-full md:col-span-3">
          <img
            className="h-full w-full object-cover"
            src={product?.photo}
            alt=""
          />
        </div>
        <div className=" w-full md:col-span-2 bg-[#363949] text-white p-4">
          <div>
            <h2 className="text-2xl font-bold ">{product?.name}</h2>
            <p className="flex items-center">
              {" "}
              <FiDollarSign /> {product?.price}
            </p>
          </div>
          <h3 className="text-xl font-semibold">{product?.brandName}</h3>
          <p className="text-sm font-bold">Type: {product?.type}</p>
          <p className="text-lg">{product?.shortDescription}</p>
          <p className="text-lg">Rating: {product?.rating}</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

BrandProduct.propTypes = {
  product: PropTypes.object,
};

export default BrandProduct;
