import React from "react";

const UV = () => {
  return (
    <>
      <div className="bg-white shadow-md w-64 h-32 my-4 px-4 py-2 rounded-3xl">
        <div className="flex justify-between">
          <p>Humidity</p>
          <p className="rounded-full bg-blue-400 text-white">R</p>
        </div>
        <div className="text-center  mt-2">
          <h1 className="text-2xl font-bold">
            82% <span className="text-sm font-light">bd</span>
          </h1>
        </div>
        <div className="flex justify-between  mt-2">
          <div className="w-full mr-1">
            <h1 className="font-light text-gray-700 text-xs">0</h1>
            <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>
          <div className="w-full mr-1">
            <h1 className="font-light text-gray-700 text-xs">10</h1>
            <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>
          <div className="w-full mr-1">
            <h1 className="font-light text-gray-700 text-xs">20</h1>
            <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>
          <div className="w-full mr-1">
            <h1 className="font-light text-gray-700 text-xs">30</h1>
            <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>
          <div className="w-full mr-1">
            <h1 className="font-light text-gray-700 text-xs">40</h1>
            <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UV;
