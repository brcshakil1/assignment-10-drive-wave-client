import toast from "react-hot-toast";
import bg from "../../assets/bg/addProduct-gb.jpg";
import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BrandsFooter from "./../../components/BrandsFooter/BrandsFooter";

const UpdateProduct = () => {
  const product = useLoaderData();
  const navigate = useNavigate();

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;

    const newProduct = {
      photo,
      name,
      brandName,
      type,
      price,
      shortDescription,
      rating,
    };

    fetch(
      `https://drive-wave-server-ojtbf5xjn-brcshakil.vercel.app/products/${product._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Successfully Updated!");
          navigate(-1);
        }
      });
  };
  return (
    <div>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-no-repeat bg-center bg-fixed md:pb-10 pb-0"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="min-h-screen grid place-items-center ">
          <div className="md:max-w-2xl w-full h-screen md:h-auto mx-auto bg-white my-6 md:shadow-2xl md:shadow-[#bebebe]">
            <div className="h-12 bg-black"></div>
            <h2 className="text-3xl text-black text-center pt-8">
              Update Product
            </h2>
            <p className="text-center text-slate-700 pt-2">
              You can update your product here
            </p>
            <div className="">
              <form
                onSubmit={handleUpdateProduct}
                className="card-body bg-white"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-gray-500">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL *"
                    name="photo"
                    defaultValue={product.photo}
                    className="input input-bordered bg-transparent border-gray-200 focus:shadow-sm  focus:shadow-sky-200 focus:border-sky-300 rounded-sm md:text-lg text-base text-gray-700"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-gray-500">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name *"
                    name="name"
                    defaultValue={product.name}
                    className="input input-bordered bg-transparent border-gray-200 focus:shadow-sm  focus:shadow-sky-200 focus:border-sky-300 rounded-sm md:text-lg text-base text-gray-700"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-gray-500">
                      Brand Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Brand Name *"
                    name="brandName"
                    defaultValue={product.brandName}
                    className="input input-bordered bg-transparent border-gray-200 focus:shadow-sm  focus:shadow-sky-200 focus:border-sky-300 rounded-sm md:text-lg text-base text-gray-700"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-gray-500">
                      Type
                    </span>
                  </label>
                  <select
                    name="type"
                    id=""
                    defaultValue={product.type}
                    className="input input-bordered bg-transparent border-gray-200 focus:shadow-sm  focus:shadow-sky-200 focus:border-sky-300 rounded-sm md:text-lg text-base text-gray-700"
                  >
                    <option value="car">Car</option>
                    <option value="jeep">Jeep</option>
                    <option value="SUV">SUV</option>
                    <option value="truck">Truck</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-gray-500">
                      Price
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Price *"
                    name="price"
                    defaultValue={product.price}
                    className="input input-bordered bg-transparent border-gray-200 focus:shadow-sm  focus:shadow-sky-200 focus:border-sky-300 rounded-sm md:text-lg text-base text-gray-700"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-gray-500">
                      Short Description
                    </span>
                  </label>
                  <textarea
                    name="shortDescription"
                    placeholder="Short Description *"
                    defaultValue={product.shortDescription}
                    className=" textarea w-full p-4 bg-transparent border-gray-200 rounded-sm focus:outline-none focus:shadow-sm  focus:shadow-sky-200 focus:border-sky-300 text-base text-gray-700"
                    required
                  ></textarea>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg text-gray-500">
                      Rating
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Rating *"
                    name="rating"
                    defaultValue={product.rating}
                    className="input input-bordered bg-transparent border-gray-200 focus:shadow-sm  focus:shadow-sky-200 focus:border-sky-300 rounded-sm md:text-lg text-base text-gray-700"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#0088C6] text-white border-none hover:bg-sky-500">
                    Submit Product
                  </button>
                </div>
              </form>
            </div>
            <div className="h-12 bg-black hidden md:block"></div>
          </div>
        </div>
      </div>
      <BrandsFooter />
    </div>
  );
};

export default UpdateProduct;
