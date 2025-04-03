import React from "react";

export default function WeatherData({ apiResponse }) {
  let localTimeTime = "";
  let localTimeDate = "";
  if (apiResponse.location.localtime !== null) {
    const localTime = new Date(apiResponse.location.localtime);
    localTimeDate = localTime.toLocaleDateString();
    localTimeTime = localTime.toLocaleTimeString();
  }

  return (
    <div className="weather-data">
      <div className="location-name">{apiResponse.location.name}</div>
      <div className="location-country">{apiResponse.location.country}</div>
      <div className="location-time">
        <div className="date">{localTimeDate}</div>
        <div className="time">{localTimeTime}</div>
      </div>
      <div className="location-temp">
        {apiResponse.current.temp_c !== null
          ? apiResponse.current.temp_c + "°C"
          : null}
        <div className="location-condition-text">
          {apiResponse.current.condition.text}
        </div>
      </div>
      <div className="div-icon">
        {apiResponse.current.condition.icon !== null ? (
          <img
            className="location-condition-img"
            src={apiResponse.current.condition.icon}
            alt={apiResponse.current.condition.text}
          />
        ) : null}
      </div>
    </div>
  );
}
