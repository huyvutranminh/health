import React from "react";

const RecordCategory = ({ category }) => {
  return (
    <div className="border-[24px] border-primary w-full">
      <div className="relative overflow-hidden pt-[100%]">
        <img
          className="absolute top-0 left-0 w-full h-full"
          src={category.image}
          alt={category.title}
        ></img>
        <div className="absolute flex flex-col justify-center items-center text-white top-0 left-0 w-full h-full bg-overlay">
          <p className="text-primary text-2xl">{category.title}</p>
          <div className="bg-primary-bold py-1 px-5">{category.buttonText}</div>
        </div>
      </div>
    </div>
  );
};

export default RecordCategory;
