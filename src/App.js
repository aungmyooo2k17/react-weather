import React, { useEffect, useState } from "react";
import Humidity from "./components/Humidity";
import Wind from "./components/Wind";
import Precipitation from "./components/Precipitation";
import UV from "./components/UV";
import Feels from "./components/Feels";
import RainChance from "./components/RainChance";
import Prediction from "./components/Prediction";
import axios from "axios";
import WeatherDetailCard from "./components/WeatherDetailCard";
import {
  faCloud,
  faCloudMoonRain,
  faCloudShowersHeavy,
  faDroplet,
  faDropletSlash,
  faTemperatureHalf,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      navigator.geolocation.getCurrentPosition((pos) => {
        setLat(pos.coords.latitude);
        setLong(pos.coords.longitude);
      });

      console.log("Lat: ", lat);
      console.log("Long: ", long);

      await axios
        .get(`http://localhost:3002/weather-data`)
        .then((result) => {
          setData(result.data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    };
    fetchWeatherData();
  }, [lat, long]);

  const getCountryFromTimeZone = (timezone) => {
    const [region, country] = timezone.split("/");
    return country || region;
  };

  return loading ? (
    <>
      <h1>loading.</h1>
    </>
  ) : (
    <>
      <div className="flex">
        <div
          className="w-1/4"
          style={{
            backgroundImage:
              "url(" +
              "https://plus.unsplash.com/premium_photo-1666323594456-cd1b09b2cbf4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex justify-between ml-6 mr-12 my-8 items-center">
            <div className="font-bold">Your Logo</div>
            <input
              type="text"
              className="bg-gray-200 opacity-50 px-4 py-2 rounded-full"
            />
          </div>
          <div className="flex justify-between ml-6 mr-12 mt-12 items-center">
            <p className="text-xl font-semibold">{data.timezone}</p>
            <p className="text-sm font-light">{data.daily.sunrise[0]}</p>
          </div>
          <div className="flex justify-between ml-6 mr-12 mt-4 items-center">
            <p className="text-sm">{data.current.time}</p>
            <p className="text-sm font-light">{data.daily.sunset[0]}</p>
          </div>
          <div className="text-center mt-16">
            <h3 className="text-6xl font-bold text-white opacity-80">
              {data.current.temperature_2m}
              {data.current_units.temperature_2m}
            </h3>
            <p className="mt-8 font-semibold text-white opacity-100">
              Sunny Day
            </p>
          </div>
        </div>
        <div className="flex-1 ml-[-24px] bg-blue-200 rounded-3xl rounded-br-none rounded-tr-none px-8 pt-8">
          <Prediction unit={data.hourly_units} value={data.hourly} />
          <p className="text-base font-extralight">
            More detail of today weather
          </p>
          <div className="flex flex-row justify-between">
            <WeatherDetailCard
              icon={faDroplet}
              title={"Humidity"}
              unit={data.current_units.relative_humidity_2m}
              value={data.current.relative_humidity_2m}
              lables={["Bad", "Normal", "Good"]}
            />

            <WeatherDetailCard
              icon={faWind}
              title={"Wind"}
              unit={data.current_units.precipitation}
              value={data.current.precipitation}
              lables={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]}
            />
            <WeatherDetailCard
              icon={faCloudShowersHeavy}
              title={"Precipitation"}
              unit={data.current_units.precipitation}
              value={data.current.precipitation}
              lables={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]}
            />
          </div>
          <div className="flex flex-row justify-between">
            <WeatherDetailCard
              icon={faSun}
              title={"UV index"}
              unit={data.current_units.temperature_2m}
              value={data.current.temperature_2m}
              lables={[0, 25, 50]}
            />
            <WeatherDetailCard
              icon={faTemperatureHalf}
              title={"Feels like"}
              unit={data.current_units.temperature_2m}
              value={data.current.temperature_2m}
              lables={[0, 25, 50]}
            />
            <WeatherDetailCard
              icon={faCloudShowersHeavy}
              title={"Chacne of rain"}
              unit={data.current_units.rain}
              value={data.current.rain}
              lables={[0, 10, 20, 30, 40, 50]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
