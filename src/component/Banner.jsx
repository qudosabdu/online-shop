import React from "react";
import Home from "../Pictures/Home.png";

function Banner() {
  return (
    <div className="bg-[#e4e4e4] w-full px-[100px] pt-[100px]">
      <div className="max-w-[1240px] mx-auto flex justify-between">
        <div className="mt-32 mx-0">
          <h5 className="text-lg font-jost py-4">NEW ARRIVAL</h5>
          <h1 className="font-jost text-6xl py-4" >Night Spring <br /><span className="text-7xl font-bold">
            Dress
          </span></h1>
          <h6>
            <a className="font-jost">Shop Now</a>
          </h6>
        </div>

        <div>
        <img src={Home} alt='Home' />
        </div>
      </div>
    </div>
  );
}

export default Banner;
