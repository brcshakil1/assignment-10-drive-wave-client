import { useEffect, useState } from "react";
import Brand from "./../Brand/Brand";
import { PropTypes } from "prop-types";

const Brands = ({ setBrandName }) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-3xl text-center pt-14 pb-6">Explore Brands</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {brands.map((brand, idx) => (
          <Brand key={idx} brand={brand} setBrandName={setBrandName} />
        ))}
      </div>
    </div>
  );
};

Brands.propTypes = {
  setBrandName: PropTypes.func,
};

export default Brands;
