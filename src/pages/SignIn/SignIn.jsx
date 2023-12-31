import { Link, useLocation, useNavigate } from "react-router-dom";
import signInBg from "../../assets/bg/signIn-out-bg-desktop-2.jpg";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../../components/Navbar/Navbar";
import BrandsFooter from "../../components/BrandsFooter/BrandsFooter";

const SignIn = () => {
  const [isClose, setIsClose] = useState(true);
  const { signIn, googleSignIn } = useContext(AuthContext);
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

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        if (result) {
          Swal.fire({
            icon: "success",
            title: "Welcome!",
            text: "User successfully signed in!",
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
        <div className="md:max-w-2xl w-full h-screen md:h-auto mx-auto bg-white mb-6">
          <div className="h-12 bg-black"></div>
          <h2 className="text-3xl text-black text-center pt-8">Sign in</h2>
          <p className="text-center text-slate-700 pt-2">
            Please enter your email and password
          </p>
          <div className="">
            <form onSubmit={handleSignIn} className="card-body bg-white">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-gray-500">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="E-mail Address"
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
                    placeholder="Password"
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
                <label className="pt-2">
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:underline"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#0088C6] text-white border-none hover:bg-sky-500">
                  Sign in
                </button>
                <p className="text-black text-right pt-3">
                  Don{`'`}t have an account yet?{" "}
                  <Link
                    to="/signUp"
                    className="text-base text-blue-400 hover:text-blue-500 font-semibold"
                  >
                    Sign up
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

export default SignIn;
