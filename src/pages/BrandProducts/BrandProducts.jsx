import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BrandProduct from "./../../components/BrandProduct/BrandProduct";
import Navbar from "../../components/Navbar/Navbar";
import BrandsSlider from "../../components/BrandsSlider/BrandsSlider";

const BrandProducts = () => {
  const [allBrandsProducts, setAllBrandsProducts] = useState([]);
  const [brandProducts, setBrandProducts] = useState([]);

  const { name } = useParams();

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
      <Navbar />
      {brandProducts.length ? (
        <div className="pb-10">
          <BrandsSlider name={name} />
          <h2 className="text-xl md:text-2xl text-center font-semibold pt-12 pb-8">
            - Explore Products -
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {brandProducts?.map((product) => (
              <BrandProduct key={product._id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className=" h-[80vh] grid place-items-center">
          <div className="flex flex-col  items-center">
            <h2 className="text-2xl font-bold text-center">
              We don{`'`}t have {name}
              {`'`}s products yet.
            </h2>
            <div className="flex justify-center gap-3">
              <Link to="/addProduct">
                <button className="border-2 border-black hover:border-slate-800 text-black hover:text-white py-2 px-4 rounded-md mt-5 hover:bg-slate-800 translate-bg duration-300 ease-in-out font-bold">
                  Add Product
                </button>
              </Link>
              <Link to="/">
                <button className="border-2 border-black hover:border-slate-800 text-black hover:text-white py-2 px-4 rounded-md mt-5 hover:bg-slate-800 translate-bg duration-300 ease-in-out font-bold">
                  Go To Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandProducts;
