import React from "react";
import Exercise from "./components/Exercise";

const exercises = [
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
  {
    title: "家事全般（立位・軽い）",
    calories: "26kcal",
    time: "10 min",
  },
];

export const MyExercises = () => {
  return (
    <div className="mb-14 h-[264px] w-full bg-dark py-4 px-6 overflow-hidden">
      <div className="w-1/6 flex text-white">
        <p>MY EXERCISE</p>
        <p className="text-2xl ml-6">2021.05.21</p>
      </div>
      <div className="h-[180px] flex flex-col overflow-y-scroll scrollable-element mt-1 mb-4">
        <div className="flex flex-wrap text-white">
          <div className="w-1/2">
            <ul className="list-disc pl-4 pr-12">
              {exercises
                .slice(0, Math.ceil(exercises.length / 2))
                .map((exercise, index) => (
                  <Exercise key={index} exercise={exercise} />
                ))}
            </ul>
          </div>
          <div className="w-1/2">
            <ul className="list-disc pl-4 pr-12">
              {exercises
                .slice(Math.ceil(exercises.length / 2))
                .map((exercise, index) => (
                  <Exercise key={index} exercise={exercise} />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
