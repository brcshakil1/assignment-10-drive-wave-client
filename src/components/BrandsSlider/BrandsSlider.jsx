import { useEffect, useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { PropTypes } from "prop-types";

const BrandsSlider = ({ name }) => {
  const [slides, setSlides] = useState([]);
  const [brandAd, setBrandAd] = useState([]);
  const [index, setIndex] = useState(0);
  //   next and previous slide
  const handleNextSlide = () => {
    if (index < brandAd[0]?.ad.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handlePrevSlide = () => {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(brandAd[0]?.ad.length - 1);
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
      if (index < brandAd[0]?.ad.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [index, brandAd]);

  console.log(index);

  return (
    <div
      className="h-[200px] md:h-[90vh] bg-cover bg-[#363636b3] bg-blend-overlay relative"
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
            className="w-[35px]  h-[35px] md:w-[50px] md:h-[50px] rounded-full bg-gray-700 grid place-items-center border border-white cursor-pointer"
          >
            <AiOutlineLeft className="text-white text-xl md:text-2xl" />
          </div>
          <div
            onClick={handleNextSlide}
            className="w-[35px] h-[35px]  md:w-[50px] md:h-[50px] rounded-full bg-gray-700 grid place-items-center border border-white cursor-pointer"
          >
            <AiOutlineRight className="text-white text-xl md:text-2xl" />
          </div>
        </div>
      </div>
      <div className="z-10  absolute top-[50%] left-[50%] -translate-y-[50%] rounded-md -translate-x-[50%] text-base md:text-xl text-slate-200 font-bold h-[70%]  md:h-auto w-[75%] md:w-[500px]">
        <p>{brandAd[0]?.ad[index]?.message}</p>
      </div>
    </div>
  );
};

BrandsSlider.propTypes = {
  name: PropTypes.string,
};

export default BrandsSlider;
