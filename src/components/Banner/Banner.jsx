import bannerBg from "../../assets/bg/banner-bg.jpg";
const Banner = () => {
  return (
    <div
      className="md:min-h-screen min-h-[40vh] bg-cover bg-no-repeat bg-center bg-[#00000079] bg-blend-overlay grid place-items-center"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      <div className="bg-slate-800 w-full md:max-w-lg mx-auto p-6 rounded-none md:rounded-lg bg-opacity-80 shadow-lg  shadow-slate-800 my-10">
        <h1 className=" text-xl md:text-4xl font-bold text-slate-300">
          Welcome to DriveWave, <br /> Your Ultimate Destination <br /> for
          Automotive Excellence!
        </h1>
        <ul className="max-w-sm mx-auto text-lg md:text-xl text-slate-300 pt-4 space-y-2">
          <li>- Leading Brands</li>
          <li>- Expert Service</li>
          <li>- Competitive Prices</li>
          <li>- Explore Cars, Bikes & More</li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
