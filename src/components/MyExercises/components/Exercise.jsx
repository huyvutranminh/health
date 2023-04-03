import React from "react";

const Exercise = ({ exercise }) => {
  return (
    <li className="border-b-[1px] border-gray-200 mb-2">
      <div className="flex justify-between">
        <div>
          <p>{exercise.title}</p>
          <p className="text-primary">{exercise.calories}</p>
        </div>
        <p className="text-lg text-primary">{exercise.time}</p>
      </div>
    </li>
  );
};

export default Exercise;
