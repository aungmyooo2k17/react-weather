import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WeatherDetailCard = ({ value, unit, title, icon, lables }) => {
  return (
    <>
      <div className="bg-white shadow-md w-full h-36 my-4 mx-2 px-8 py-4 rounded-3xl">
        <div className="flex justify-between">
          <p>{title}</p>
          <FontAwesomeIcon
            className="w-3 h-3 rounded-xl bg-blue-400 text-white p-2"
            icon={icon}
          />
        </div>
        <div className="text-center  mt-2">
          <h1 className="text-2xl font-bold">
            {value} <span className="text-sm font-light">{unit}</span>
          </h1>
        </div>
        <div className="flex justify-between  mt-2">
          <div className="w-full">
            <div className="flex justify-between mb-2">
              {lables.map((x) => (
                <h1 className="font-light text-gray-700 text-xs">{x}</h1>
              ))}
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

export default WeatherDetailCard;
