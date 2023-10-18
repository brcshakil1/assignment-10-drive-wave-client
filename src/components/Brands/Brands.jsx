import { useEffect, useState } from "react";
import Brand from "./../Brand/Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  console.log(brands);
  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2>All Brands</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {brands.map((brand, idx) => (
          <Brand key={idx} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
