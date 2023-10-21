import { useEffect, useState } from "react";
import Tips from "../../components/Tips/Tips";

const BuyingTips = () => {
  const [buyingTips, setBuyingTips] = useState([]);

  useEffect(() => {
    fetch("/carBuyingTips.json")
      .then((res) => res.json())
      .then((data) => setBuyingTips(data));
  }, []);
  console.log(buyingTips);
  return (
    <div className="bg-slate-800 py-10 my-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-white">
          Vehicles buying tips
        </h2>
        <div className="grid grid-cols-5 gap-3">
          {buyingTips?.map((tips, idx) => (
            <Tips key={idx} tips={tips} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyingTips;
