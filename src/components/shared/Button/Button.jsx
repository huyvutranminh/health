import React from "react";

export const Button = ({ loadMoreItems }) => {
  return (
    <button
      className="mt-4 mb-16 py-2 px-4 rounded-lg bg-gradient text-white mx-auto focus:outline-none"
      onClick={loadMoreItems}
    >
      記録をもっと見る
    </button>
  );
};
