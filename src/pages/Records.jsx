import React from "react";
import RecordCategories from "../components/RecordCategories";
import { ReactComponent as Chart } from "../assets/images/chart.svg";
import MyExercises from "../components/MyExercises";
import MyDiary from "../components/MyDiary";

const Records = () => {
  return (
    <div className="w-3/4 mx-auto">
      <RecordCategories />
      <div className="w-full bg-dark flex justify-center mb-14">
        <Chart className="object-cover" />
      </div>
      <MyExercises />
      <MyDiary />
    </div>
  );
};

export default Records;
