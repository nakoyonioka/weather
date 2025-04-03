# Weather App

## Overview
This project is a React-based weather application that allows users to search for a city and retrieve real-time weather data along with a 3-day forecast. The application fetches weather data from the WeatherAPI service and displays key weather details such as temperature, wind speed, humidity, and conditions.

## Features
- Search for weather information by city name
- Fetch real-time weather conditions and a 3-day forecast
- Autocomplete city suggestions
- Display temperature, weather conditions, wind speed, and more
- Responsive and user-friendly UI

## Technologies Used
- **React**: Frontend framework
- **Axios**: HTTP client for API requests
- **WeatherAPI**: Weather data provider
- **CSS**: Styling

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (>= 14.x recommended)
- npm or yarn
- A WeatherAPI key (obtain from [WeatherAPI](https://www.weatherapi.com/))

### Steps to Run
1. Clone the repository:
   ```sh
   git clone https://github.com/nakoyonioka/weather.git
   cd weather
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add your API key:
   ```sh
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```
4. Start the React app:
   ```sh
   npm start
   ```

## Usage
1. Type the name of a city in the search bar.
2. Select a suggested city from the dropdown (if available) or press "Search."
3. The current weather details and forecast will be displayed.

## Project Structure
```
├── src
│   ├── components
│   │   ├── WeatherData.js  # Displays weather data
│   │   ├── WeatherForm.js  # Handles user input and API calls
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point
│   ├── App.css             # Styling
│── public
│   ├── index.html          # Main HTML file
│── package.json            # Dependencies and scripts
```

## API Usage
- `GET /forecast.json` - Fetches real-time weather and forecast data
- `GET /search.json` - Provides city search suggestions

## Future Improvements
- Add support for additional weather metrics (air quality, UV index, etc.)
- Improve UI with dynamic icons and animations
- Implement a favorites feature for frequently searched locations
- Deploy the app online
  
