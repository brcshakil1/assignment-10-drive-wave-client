import { PropTypes } from "prop-types";
import { BsSearch } from "react-icons/bs";

const Brand = ({ brand }) => {
  const { brand_name, img } = brand;
  return (
    <div className="group rounded-lg overflow-hidden relative cursor-pointer">
      <div className="md:h-[350px]">
        <img className=" h-full object-cover" src={img} alt={brand_name} />
      </div>
      <div className="grid place-items-center w-full h-full absolute transition-bg duration-500 ease-in-out group-hover:bg-[#000000b3] top-0 left-0">
        <BsSearch className="hidden group-hover:block text-3xl font-bold text-slate-400" />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-slate-300 bg-slate-800 p-3 ">
        {brand_name}
      </h3>
    </div>
  );
};

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
