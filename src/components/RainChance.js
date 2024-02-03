import React from "react";

const RainChance = ({ value, unit }) => {
  return (
    <>
      <div className="bg-white shadow-md w-64 h-32 my-4 px-4 py-2 rounded-3xl">
        <div className="flex justify-between">
          <p>Chance of rain</p>
          <p className="rounded-full bg-blue-400 text-white">R</p>
        </div>
        <div className="text-center  mt-2">
          <h1 className="text-2xl font-bold">
            {value} <span className="text-sm font-light">{unit}</span>
          </h1>
        </div>
        <div className="flex justify-between  mt-2">
          <div className="w-full mr-1">
            <div className="flex justify-between">
              <h1 className="font-light text-gray-700 text-xs">40</h1>
              <h1 className="font-light text-gray-700 text-xs">40</h1>
              <h1 className="font-light text-gray-700 text-xs">40</h1>
              <h1 className="font-light text-gray-700 text-xs">40</h1>
              <h1 className="font-light text-gray-700 text-xs">40</h1>
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

export default RainChance;
