import { PropTypes } from "prop-types";
const Tips = ({ tips }) => {
  return (
    <div className=" py-6 px-4 text-center text-white  relative shadow-lg shadow-slate-200">
      <div className="absolute top-0 left-0 h-full w-full bg-slate-800 -z-10 opacity-0 "></div>
      <div className="flex justify-center">
        <img className="w-20 h-20" src={tips?.icon} alt="" />
      </div>
      <h2 className="py-2 text-lg font-bold">{tips?.title}</h2>
      <p>{tips?.description}</p>
    </div>
  );
};

Tips.propTypes = {
  tips: PropTypes.object,
};
export default Tips;
