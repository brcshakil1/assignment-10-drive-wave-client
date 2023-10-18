import bg from "../../assets/bg/addProduct-gb.jpg";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;

    const product = {
      photo,
      name,
      brandName,
      type,
      price,
      shortDescription,
      rating,
    };
    console.log(product);
  };
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center bg-fixed"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="min-h-screen grid place-items-center ">
        <div className="md:max-w-2xl w-full h-screen md:h-auto mx-auto bg-white my-6 md:shadow-2xl md:shadow-[#bebebe]">
          <div className="h-12 bg-black"></div>
          <h2 className="text-3xl text-black text-center pt-8">Add Product</h2>
          <p className="text-center text-slate-700 pt-2">
            Fill the following steps to add a product
          </p>
          <div className="">
            <form onSubmit={handleAddProduct} className="card-body bg-white">
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
                  className="input input-bordered bg-transparent border-gray-200 focus:shadow-sm  focus:shadow-sky-200 focus:border-sky-300 rounded-sm md:text-lg text-base text-gray-700"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-gray-500">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name *"
                  name="name"
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
                  className="input input-bordered bg-transparent border-gray-200 focus:shadow-sm  focus:shadow-sky-200 focus:border-sky-300 rounded-sm md:text-lg text-base text-gray-700"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-gray-500">Type</span>
                </label>
                <select
                  name="type"
                  id=""
                  className="input input-bordered bg-transparent border-gray-200 focus:shadow-sm  focus:shadow-sky-200 focus:border-sky-300 rounded-sm md:text-lg text-base text-gray-700"
                >
                  <option value="car">Car</option>
                  <option value="jeep">Jeep</option>
                  <option value="motorcycle">Motorcycle</option>
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
                  className=" textarea w-full p-4 bg-transparent border-gray-200 rounded-sm focus:outline-none focus:shadow-sm  focus:shadow-sky-200 focus:border-sky-300 text-base text-gray-700"
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
                  className="input input-bordered bg-transparent border-gray-200 focus:shadow-sm  focus:shadow-sky-200 focus:border-sky-300 rounded-sm md:text-lg text-base text-gray-700"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#0088C6] text-white border-none hover:bg-sky-500">
                  Add Product
                </button>
              </div>
            </form>
          </div>
          <div className="h-12 bg-black hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
