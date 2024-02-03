import moment from "moment/moment";
import React from "react";
import ReactApexChart from "react-apexcharts";

const Prediction = ({ value, unit }) => {
  const time_list = value.time
    .slice(0, 24)
    .map((x) => moment(x).format("HHmm"));

  var series = [
    {
      name: "Desktops",
      data: value.temperature_2m.slice(0, 24),
    },
  ];

  var options = {
    chart: {
      height: 300,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: time_list,
    },
  };
  return (
    <>
      <p className="text-lg font-bold">Welcome!</p>
      <p className="text-base font-extralight">Checkout today weather information.</p>
      <div className="bg-white shadow-md w-full rounded-3xl p-4 my-4">
        <div className="flex justify-between">
          <p>Upcoming hours</p>
          <div>
            <button>Rain Prediction</button>
            <button>Rain Prediction</button>
          </div>
        </div>

        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={250}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </>
  );
};

export default Prediction;
