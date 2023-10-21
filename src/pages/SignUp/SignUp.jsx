import { Link, useLocation, useNavigate } from "react-router-dom";
import signInBg from "../../assets/bg/signIn-out-bg-desktop-2.jpg";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { updateProfile } from "firebase/auth";
import Navbar from "./../../components/Navbar/Navbar";
import BrandsFooter from "../../components/BrandsFooter/BrandsFooter";

const SignUp = () => {
  const [isClose, setIsClose] = useState(true);

  const { createUser, googleSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleClose = () => {
    setIsClose(!isClose);
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        if (result) {
          Swal.fire({
            icon: "success",
            title: "Welcome!",
            text: "User successfully signed up!",
          });
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: err.message,
        });
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const fullName = firstName + " " + lastName;
    const photo = form.photo.value;

    const email = form.email.value;
    const password = form.password.value;

    if (firstName === "" || firstName === " ") {
      Swal.fire({
        icon: "error",
        title: "You must provide a name!",
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Password is less than 6 characters!",
      });
      return;
    }

    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Don't have a capital letter",
      });
      return;
    }
    if (!/[!#$%&? "]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Don't have a special character. Example: !, #, $, %, & or ?",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        if (result.user) {
          updateProfile(result.user, {
            displayName: fullName,
            photoURL: photo || "https://i.ibb.co/7N05NdW/user.png",
          });
          Swal.fire({
            icon: "success",
            title: "Welcome!",
            text: "User successfully signed up!",
          });
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: err.message,
        });
      });
  };
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center bg-fixed"
      style={{
        backgroundImage: `url(${signInBg})`,
      }}
    >
      <Navbar />
      <div className="min-h-screen grid place-items-center">
        <div className="md:max-w-2xl w-full h-screen md:h-auto mx-auto bg-white">
          <div className="h-12 bg-black"></div>
          <h2 className="text-3xl text-black text-center pt-8">Sign Up</h2>
          <p className="text-center text-slate-700 pt-2">
            Please enter your name, email and password
          </p>
          <div>
            <form onSubmit={handleSignUp} className="card-body bg-white">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-gray-500">
                    First Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="First Name *"
                  name="firstName"
                  className="input input-bordered bg-transparent border-gray-200 focus:shadow-sm  focus:shadow-sky-200 focus:border-sky-300 rounded-sm md:text-lg text-base text-gray-400"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-gray-500">
                    Last Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  className="input input-bordered bg-transparent border-gray-200 focus:shadow-sm  focus:shadow-sky-200 focus:border-sky-300 rounded-sm md:text-lg text-base text-gray-400"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-gray-500">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered bg-transparent border-gray-200 focus:shadow-sm  focus:shadow-sky-200 focus:border-sky-300 rounded-sm md:text-lg text-base text-gray-400"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-gray-500">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="E-mail Address *"
                  name="email"
                  className="input input-bordered bg-transparent border-gray-200 focus:shadow-sm  focus:shadow-sky-200 focus:border-sky-300 rounded-sm md:text-lg text-base text-gray-400"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-gray-500">
                    Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={`${isClose ? "password" : "text"}`}
                    placeholder="Password *"
                    className="input w-full input-bordered bg-transparent border-gray-200 focus:shadow-sm  focus:shadow-sky-200 focus:border-sky-300 rounded-sm md:text-lg text-base text-gray-400"
                    name="password"
                    required
                  />
                  <div
                    onClick={handleClose}
                    className="absolute right-2 top-4 cursor-pointer"
                  >
                    <BsEyeFill
                      className={`text-xl ${isClose ? "hidden" : "block"}`}
                    />
                    <BsEyeSlashFill
                      className={`text-xl ${isClose ? "block" : "hidden"}`}
                    />
                  </div>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#0088C6] text-white border-none hover:bg-sky-500">
                  Sign Up
                </button>
                <p className="text-black text-right pt-3">
                  You have an account ?{" "}
                  <Link
                    to="/signIn"
                    className="text-base text-blue-400 hover:text-blue-500 font-semibold"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
              <div
                onClick={handleGoogleSignIn}
                className="flex items-center border border-gray-300 hover:border-sky-300 p-4 md:px-6 rounded-md cursor-pointer mt-5"
              >
                <FcGoogle className="text-xl" />
                <h2 className="mx-auto text-sm md:text-xl font-semibold text-[#333]">
                  Continue with google
                </h2>
              </div>
            </form>
          </div>
          <div className="h-12 bg-black hidden md:block"></div>
        </div>
      </div>
      <BrandsFooter />
    </div>
  );
};

export default SignUp;
