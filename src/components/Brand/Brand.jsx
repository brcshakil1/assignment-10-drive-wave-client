import { PropTypes } from "prop-types";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { brand_name, img } = brand;

  return (
    <Link to={`/brandProducts/${brand_name}`}>
      <div className="group rounded-lg overflow-hidden relative cursor-pointer shadow-md shadow-slate-600">
        <div className="grid place-items-center h-[150px] md:h-[300px] bg-slate-700">
          <img
            className="w-[100px] md:w-[200px] object-cover"
            src={img}
            alt={brand_name}
          />
        </div>
        <div className="grid place-items-center w-full h-full absolute transition-bg duration-500 ease-in-out group-hover:bg-[#000000b3] top-0 left-0">
          <BsSearch className="hidden group-hover:block text-3xl font-bold text-slate-400" />
        </div>
        <h3 className="text-base md:text-3xl font-bold text-slate-300 bg-slate-800 p-3 ">
          {brand_name}
        </h3>
      </div>
    </Link>
  );
};

Brand.propTypes = {
  brand: PropTypes.object,
  setBrandName: PropTypes.func,
};

export default Brand;
