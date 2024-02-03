import React from "react";

const Feels = ({ value, unit }) => {
  return (
    <>
      <div className="bg-white shadow-md w-64 h-36 my-4 px-8 py-4 rounded-3xl">
        <div className="flex justify-between">
          <p>Feels Like</p>
          <p className="rounded-full bg-blue-400 text-white">R</p>
        </div>
        <div className="text-center  mt-2">
          <h1 className="text-2xl font-bold">
            {value} <span className="text-sm font-light">{unit}</span>
          </h1>
        </div>
        <div className="flex justify-between  mt-2">
          <div className="w-full">
            <div className="flex justify-between mb-2">
              <h1 className="font-light text-gray-700 text-xs">0</h1>
              <h1 className="font-light text-gray-700 text-xs">25</h1>
              <h1 className="font-light text-gray-700 text-xs">50</h1>
            </div>
            <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: value + "%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feels;
