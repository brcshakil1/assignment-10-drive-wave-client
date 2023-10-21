import { PropTypes } from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import Swal from "sweetalert2";

const CartProduct = ({ cart, userCartProducts, setUserCartProducts }) => {
  const handleDelete = (id) => {
    console.log("deleted", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://drive-wave-server-ojtbf5xjn-brcshakil.vercel.app/cart/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = userCartProducts.filter((pd) => pd._id !== id);
              setUserCartProducts(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="text-white pb-8 ">
      <div className="block md:flex shadow-md shadow-[#59696d]">
        <div className="">
          <img
            className="w-full md:w-[500px] h-[240px] object-cover"
            src={cart?.photo}
            alt=""
          />
        </div>
        <div className="bg-[#25363B] w-full p-5 flex items-center">
          <div className="">
            <h3 className="text-xl font-bold">{cart.name}</h3>
            <p>{cart.shortDescription.slice(0, 90)}</p>
            <span className="flex items-center text-xl md:text-3xl py-3 w-min ">
              <FiDollarSign className="text-2xl pl-1" /> {cart.price}
            </span>
            <div className="flex">
              <p className="hover:underline border-r-2 pr-3 cursor-pointer">
                Explore
              </p>
              <p
                onClick={() => handleDelete(cart._id)}
                className="hover:underline pl-3 cursor-pointer"
              >
                Delete
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  cart: PropTypes.object,
  userCartProducts: PropTypes.array,
  setUserCartProducts: PropTypes.func,
};

export default CartProduct;
