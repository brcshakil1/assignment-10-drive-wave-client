import { PropTypes } from "prop-types";
const Testimonial = ({ testimonial }) => {
  console.log(testimonial);
  return (
    <div>
      <div className="">
        <img src={testimonial?.photo} alt="" />
      </div>
      <div>
        <h2>{testimonial?.name}</h2>
        <div>
          <p>{testimonial?.location}</p>
        </div>
        <p>{testimonial?.testimonial}</p>
        <p>Rating: {}</p>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  testimonial: PropTypes.object,
};
export default Testimonial;
