import React from "react";
import banner from "../assets/images/banner.svg";
import MealTabs from "../components/MealTabs";

const Home = () => {
  return (
    <>
      <div className="flex">
        <div className=" w-5/12">
          <div className="relative pt-[58.5%] overflow-hidden">
            <img
              src={banner}
              alt="banner"
              className="absolute object-cover top-0 left-0 h-full w-full"
            />
          </div>
        </div>

        <div className="bg-black w-7/12">
          <p className="text-white">Chart </p>
        </div>
      </div>

      <MealTabs />
    </>
  );
};

export default Home;
