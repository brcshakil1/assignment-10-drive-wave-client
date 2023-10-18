import { PropTypes } from "prop-types";

const Brand = ({ brand }) => {
  const { brand_name, img } = brand;
  return (
    <div>
      <div className="md:h-[350px]">
        <img className=" h-full object-cover" src={img} alt={brand_name} />
      </div>
      <h3>{brand_name}</h3>
    </div>
  );
};

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
