import React from "react";

const MealItem = ({ item, index }) => {
  return (
    <div key={index} className="w-full relative">
      <div className="relative bg-slate-200 pt-[100%] overflow-hidden">
        <img
          src={item.img}
          alt="meal"
          className="absolute object-cover top-0 left-0 h-full w-full"
        />
        <p className="absolute bottom-0 left-0 text-white bg-yellow-custom p-2">
          {item.date}
        </p>
      </div>
    </div>
  );
};

export default MealItem;
