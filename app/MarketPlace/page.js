import React from "react";

const MarketPlace = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-start pl-16 h-screen bg-[#721a22] text-white">
        <div className="flex flex-col gap-6 mb-12 mt-28">
          <h1 className="text-8xl text-[#ce96c2] font-extrabold">
            Connect <br/> more of you
          </h1>
          <p className="text-xl font-semibold text-[#ce96c2] ">
            Bring the best experiences across the internet to one <br/>
            place: your Linktree
          </p>
        </div>
        <div className="flex gap-4 font-semibold">
          <input
            type="text"
            placeholder="Search Link Apps and integrations..."
            className="p-5 rounded-lg w-[80svh] text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
