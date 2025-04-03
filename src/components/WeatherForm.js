import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default function WeatherForm({
  queryString,
  setQueryString,
  callWeatherApi,
  suggestions,
  setSuggestions,
  display,
  setDisplay,
}) {
  const autocompleteRef = useRef();

  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (event) => {
    if (
      autocompleteRef.current &&
      !autocompleteRef.current.contains(event.target)
    ) {
      setDisplay(false);
    }
  };

  function handleChange(e) {
    setDisplay((prev) => !prev);
    setQueryString(e.target.value);
    searchSuggestedCity(e);
  }

  async function searchSuggestedCity(e) {
    e.preventDefault();
    const url = ` https://api.weatherapi.com/v1/search.json?key=${WEATHER_API_KEY}&q=${queryString}`;
    try {
      const res = await axios.get(url);
      setSuggestions(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className="weather-form" autoComplete="off">
      <div className="autocomplete" ref={autocompleteRef}>
        <input
          value={queryString}
          onChange={handleChange}
          type="text"
          name="city"
          id="city"
        />
        {display && (
          <div className="autocomplete-container">
            {suggestions !== null
              ? suggestions.map((item, index) => (
                  <button
                    key={index}
                    onClick={callWeatherApi}
                    className="suggestions-list"
                  >
                    {item.name}
                  </button>
                ))
              : null}
          </div>
        )}
      </div>
      <button className="search-button" type="submit" onClick={callWeatherApi}>
        Search
      </button>
    </form>
  );
}
