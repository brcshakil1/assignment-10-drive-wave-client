import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandProduct from "./../../components/BrandProduct/BrandProduct";

const BrandProducts = () => {
  const [allBrandsProducts, setAllBrandsProducts] = useState([]);
  const [brandProducts, setBrandProducts] = useState([]);

  const { name } = useParams();
  console.log(name);

  useEffect(() => {
    fetch("http://localhost:4000/allProducts")
      .then((res) => res.json())
      .then((data) => setAllBrandsProducts(data));
  }, []);

  useEffect(() => {
    const products = allBrandsProducts.filter((pd) =>
      pd.brandName.toLowerCase().match(name.toLowerCase())
    );
    return setBrandProducts(products);
  }, [allBrandsProducts, name]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2>Products</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {brandProducts.map((product) => (
          <BrandProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
