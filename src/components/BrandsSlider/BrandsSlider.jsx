import { useEffect, useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { PropTypes } from "prop-types";

const BrandsSlider = ({ name }) => {
  const [slides, setSlides] = useState([]);
  const [brandAd, setBrandAd] = useState([]);
  const [index, setIndex] = useState(0);
  //   next and previous slide
  const handleNextSlide = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handlePrevSlide = () => {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(slides.length - 1);
    }
  };

  useEffect(() => {
    const filter = slides.filter((slide) => slide.brand_name.match(name));
    setBrandAd(filter);
  }, [slides, name]);

  // fetch slider data
  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);

  // used setInterval for index
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < slides.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [index, slides.length]);

  console.log(brandAd[0]?.ad);

  return (
    <div
      className="h-[300px] md:h-[90vh] bg-cover bg-[#363636b3] bg-blend-overlay"
      style={{
        backgroundImage: `url(${
          brandAd[0]?.ad[index]?.img || brandAd[0]?.ad[1]?.img
        })`,
      }}
    >
      <div className="max-w-7xl mx-auto md:grid md:place-items-end w-full h-full relative">
        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full">
          <div
            onClick={handlePrevSlide}
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full bg-gray-700 grid place-items-center border border-white cursor-pointer"
          >
            <AiOutlineLeft className="text-white text-xl md:text-2xl" />
          </div>
          <div
            onClick={handleNextSlide}
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full bg-gray-700 grid place-items-center border border-white cursor-pointer"
          >
            <AiOutlineRight className="text-white text-xl md:text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

BrandsSlider.propTypes = {
  name: PropTypes.string,
};

export default BrandsSlider;
