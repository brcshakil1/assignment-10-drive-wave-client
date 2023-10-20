import { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-center py-5">Testimonial</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials?.map((testimonial, idx) => (
          <Testimonial key={idx} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
