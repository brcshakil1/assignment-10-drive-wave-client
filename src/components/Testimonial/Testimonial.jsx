import { PropTypes } from "prop-types";
import { FaAddressBook } from "react-icons/fa";
const Testimonial = ({ testimonial }) => {
  console.log(testimonial);
  return (
    <div className="border rounded">
      <div>
        <img src={testimonial?.photo} alt="" />
      </div>
      <div className="p-3 ">
        <h2 className="text-xl font-bold pt-2 ">{testimonial?.name}</h2>
        <div>
          <p className="flex items-center gap-1 py-1">
            <FaAddressBook />
            {testimonial?.location}
          </p>
        </div>
        <p className="pb-1">{testimonial?.testimonial}</p>
        <p>Rating: {testimonial?.rating}</p>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  testimonial: PropTypes.object,
};
export default Testimonial;
