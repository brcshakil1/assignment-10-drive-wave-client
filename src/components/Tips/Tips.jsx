import { PropTypes } from "prop-types";
const Tips = ({ tips }) => {
  return (
    <div className="border py-6 px-4 text-center bg-[#794E41] text-white">
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
