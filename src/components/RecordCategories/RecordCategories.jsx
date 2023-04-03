import React from "react";
import RecordCategory from "./components/RecordCategory";

const categories = [
  {
    title: "BODY RECORD",
    buttonText: "自分のカラダの記録",
    image: "https://picsum.photos/200",
  },
  {
    title: "MY EXERCISE",
    buttonText: "自分の運動の記録",
    image: "https://picsum.photos/200",
  },
  {
    title: "MY DIARY",
    buttonText: "自分の日記",
    image: "https://picsum.photos/200",
  },
];

export const RecordCategories = () => {
  return (
    <div className="grid grid-cols-3 gap-12 my-14">
      {categories.map((category) => (
        <RecordCategory key={category.title} category={category} />
      ))}
    </div>
  );
};
