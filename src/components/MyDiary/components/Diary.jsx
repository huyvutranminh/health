import React from "react";

const Diary = ({ diary }) => {
  return (
    <div className="border-2 border-dark p-4">
      <p className="text-lg">{diary.date}</p>
      <p className="text-lg">{diary.time}</p>
      <p className="text-xs">{diary.content}</p>
    </div>
  );
};

export default Diary;
