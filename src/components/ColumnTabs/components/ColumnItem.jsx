import React from "react";

const ColumnItem = ({ item }) => {
  return (
    <div className="w-full relative">
      <div className="relative bg-slate-200 pt-[61.7%] overflow-hidden">
        <img
          src={item.img}
          alt="meal"
          className="absolute object-cover top-0 left-0 h-full w-full"
        />
        <p className="absolute bottom-0 left-0 text-white bg-yellow-custom p-2">
          {item.date}
        </p>
      </div>
      <div className="mt-2">
        <p className="text-dark line-clamp-2 font-light">{item.content}</p>
        <p className="text-xs text-primary-400">{item.hashtags}</p>
      </div>
    </div>
  );
};

export default ColumnItem;
