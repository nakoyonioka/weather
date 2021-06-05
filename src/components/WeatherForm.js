import React from "react";
import axios from "axios";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default function WeatherForm({
  queryString,
  setQueryString,
  callWeatherApi,
  suggestions,
  setSuggestions,
}) {
  function handleChange(e) {
    setQueryString(e.target.value);
    searchSuggestedCity(e);
  }
  async function searchSuggestedCity(e) {
    e.preventDefault();
    const url = ` http://api.weatherapi.com/v1/search.json?key=${WEATHER_API_KEY}&q=${queryString}`;
    try {
      const res = await axios.get(url);
      setSuggestions(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <section className="autocomplete">
      <form className="weather-form" autoComplete="off">
        <input
          value={queryString}
          onChange={handleChange}
          type="text"
          name="city"
          id="city"
        />
        <button
          className="search-button"
          type="submit"
          onClick={callWeatherApi}
        >
          Search
        </button>
      </form>
      {suggestions !== null
        ? suggestions.map((item) => (
            <button onClick={callWeatherApi} className="suggestions-list">
              {item.name}
            </button>
          ))
        : null}
    </section>
  );
}
