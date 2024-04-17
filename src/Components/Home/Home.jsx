// import React from 'react'

import Search_notice from "../Members/Search_notice";
import Slider from "../Slider/Slider";
import Activities from "./Activities";
import ExecutiveBody from "./ExecutiveBody";
import FeaturedProfile from "./FeaturedProfile";
import Gallery from "./Gallery";
import Media from "./Media";
import Stats from "./Stats";

function Home() {
  return (
    <>
      <div className="w-full bg-[#0d1130]">
        <div className="text-white">
          <Slider />
        </div>
      </div>

      <div className="my-6 grid lg:grid-cols-12 gap-6 lg:max-w-[90%] mx-auto">
        <div className="lg:col-span-3 order-2 lg:order-1">
          <Search_notice />
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="bg-[#171c49] text-white p-2">
            <h2 className="text-lg lg:text-xl">Executive Committee 2024-25</h2>
          </div>
          <ExecutiveBody />
          <FeaturedProfile />
          <Stats />

          <div className="bg-[#171c49] text-white p-2">
            <h2 className="text-lg lg:text-xl">Activities</h2>
          </div>
          <Activities />

          <div className="bg-[#171c49] text-white p-2">
            <h2 className="text-lg lg:text-xl">Gallery</h2>
          </div>
          <Gallery />
        </div>

        <div className="lg:col-span-2 order-3">
          <Media />
        </div>
      </div>
    </>
  );
}

export default Home;
