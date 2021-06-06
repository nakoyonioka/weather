import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import WeatherData from "./components/WeatherData";
import WeatherForm from "./components/WeatherForm";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const initial_current_weather = {
  location: {
    name: null,
    region: null,
    country: null,
    lat: null,
    lon: null,
    tz_id: null,
    localtime_epoch: null,
    localtime: null,
  },
  current: {
    last_updated_epoch: null,
    last_updated: null,
    temp_c: null,
    temp_f: null,
    is_day: null,
    condition: {
      text: null,
      icon: null,
      code: null,
    },
    wind_mph: null,
    wind_kph: null,
    wind_degree: null,
    wind_dir: null,
    pressure_mb: null,
    pressure_in: null,
    precip_mm: null,
    precip_in: null,
    humidity: null,
    cloud: null,
    feelslike_c: null,
    feelslike_f: null,
    vis_km: null,
    vis_miles: null,
    uv: null,
    gust_mph: null,
    gust_kph: null,
  },
  forecast: {},
};

function App() {
  const [queryString, setQueryString] = useState("");
  const [apiResponse, setApiResponse] = useState(initial_current_weather);
  const [suggestions, setSuggestions] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {}, []);

  async function callWeatherApi(e) {
    e.preventDefault();
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${queryString}&days=3&aqi=no&alerts=no`;
    try {
      const res = await axios.get(url);
      setApiResponse(res.data);
      setQueryString("");
      setSuggestions(null);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <WeatherForm
        queryString={queryString}
        setQueryString={setQueryString}
        callWeatherApi={callWeatherApi}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
        display={display}
        setDisplay={setDisplay}
      />
      <WeatherData apiResponse={apiResponse} display={display} />
    </div>
  );
}

export default App;
