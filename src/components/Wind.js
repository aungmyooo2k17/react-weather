import React from "react";

const Wind = () => {
  return (
    <>
      <div className="bg-white shadow-md w-64 h-32 my-4 mx-4 rounded-3xl">
        <div className="flex justify-between">
          <p>Humidity</p>
          <p className="rounded-full bg-blue-400 text-white">R</p>
        </div>
        <div className="relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full bg-blue-400 w-full">
          <div className="absolute top-0 aspect-square w-full rotate-[calc(72deg-45deg)] bg-gradient-to-tr from-transparent from-50% to-blue-100 to-50% transition-transform duration-500"></div>
          <div className="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-white"></div>
          <div className="absolute bottom-0 w-full truncate text-center text-sm leading-none">
            40%
          </div>
        </div>
      </div>
    </>
  );
};

export default Wind;
