import React from "react";
import clsx from "clsx";
const ProgressDots = ({ stage }) => {
  return (
    <div className="flex w-full items-center justify-between overflow-hidden">
      <div
        className={clsx("h-5 w-5 rounded-full", {
          "bg-blue-500": stage === 1,
          "bg-gray-200": stage !== 1,
        })}
      ></div>
      <div className="h-1 flex-1 bg-gray-300"></div>
      <div
        className={clsx("mx-2 h-5 w-5 rounded-full", {
          "bg-blue-500": stage === 2,
          "bg-gray-200": stage !== 2,
        })}
      ></div>
      <div className="h-1 flex-1 bg-gray-300"></div>
      <div
        className={clsx("h-5 w-5 rounded-full", {
          "bg-blue-500": stage === 3,
          "bg-gray-200": stage !== 3,
        })}
      ></div>
    </div>
  );
};

export default ProgressDots;
