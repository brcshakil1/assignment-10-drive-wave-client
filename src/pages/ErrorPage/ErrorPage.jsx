import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="text-center">
        <h2 className="text-3xl md:text-7xl font-bold">Oops</h2>
        <p className="text-xl pt-2">Page Not Found</p>
        <Link to="/">
          <button className="mt-4 relative border border-[#794E41] flex gap-2 items-center transition-bg duration-500 hover:bg-[#794E41] justify-center py-2 w-[200px] rounded-[30px] bg-white text-[#794E41] font-semibold group">
            <span className="group-hover:-translate-x-2 left-2 transition-transform hover:text-white">
              Go back to Home
            </span>
            <span className="group-hover:opacity-100 opacity-0 duration-300 transition-opacity absolute right-4 top-[22px] transform -translate-y-1/2">
              <AiFillHome className="text-white" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
