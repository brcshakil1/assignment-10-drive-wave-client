import { useEffect, useState } from "react";
import bg from "../../assets/bg/guid-bg2.jpg";

const CarBuyingGuides = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    fetch("/guides.json")
      .then((res) => res.json())
      .then((data) => setGuides(data));
  }, []);
  return (
    <div
      className="h-screen bg-[#00000046] bg-blend-overlay bg-no-repeat bg-center bg-fixed overflow-x-hidden overflow-scroll py-10 my-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2 className="text-3xl font-semibold text-center pb-5 text-white">
        Vehicles Buying Guide
      </h2>
      <p className="text-center md:w-96 mx-auto text-white font-bold">
        Welcome to our comprehensive car buying guide. Whether you{`'`}re a
        first-time car buyer or looking to upgrade your current vehicle, this
        guide will help you make an informed decision.
      </p>
      <div className="max-w-7xl p-4 mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-[#000000b3] text-white p-3 rounded-md ">
            <h3 className="text-lg font-bold pb-2">
              {guides && guides[0]?.sectionTitle}
            </h3>
            <p>{guides && guides[0]?.content}</p>
          </div>
          <div className="bg-[#000000b3] text-white p-3 rounded-md static md:relative top-14">
            <h3 className="text-lg font-bold pb-2">
              {guides && guides[1]?.sectionTitle}
            </h3>
            <p>{guides && guides[1]?.content}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
          <div className="bg-[#000000b3] text-white p-3 rounded-md ">
            <h3 className="text-lg font-bold pb-2">
              {guides && guides[2]?.sectionTitle}
            </h3>
            <p>{guides && guides[2]?.content}</p>
          </div>
          <div className="bg-[#000000b3] text-white p-3 rounded-md static md:relative top-14">
            <h3 className="text-lg font-bold pb-2">
              {guides && guides[3]?.sectionTitle}
            </h3>
            <p>{guides && guides[3]?.content}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
          <div className="bg-[#000000b3] text-white p-3 rounded-md ">
            <h3 className="text-lg font-bold pb-2">
              {guides && guides[4]?.sectionTitle}
            </h3>
            <p>{guides && guides[4]?.content}</p>
          </div>
          <div className="bg-[#000000b3] text-white p-3 rounded-md static md:relative top-14">
            <h3 className="text-lg font-bold pb-2">
              {guides && guides[5]?.sectionTitle}
            </h3>
            <p>{guides && guides[5]?.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBuyingGuides;
