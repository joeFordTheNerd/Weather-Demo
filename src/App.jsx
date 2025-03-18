import React, { useState } from "react"
import Card from "./components/Card/Card"
import CardContainer from "./components/CardContainer/CardContainer"
import SearchBar from "./components/SearchBar/SearchBar"
import Heading from "./components/Header/Header"
import Container from "./components/Container/Container"

function App() {

  const [weatherData, setWeatherData] = useState([])
  const [error, setError] = useState("")
  const fetchWeather = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max&timezone=auto&forecast_days=5`
      );
      const weatherData = await response.json();
      if (weatherData.daily) {

        const formattedWeather = weatherData.daily.time.map((dateString, index) => {
          const dateObj = new Date(dateString)
          const formattedDate = dateObj.toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long"
          });
          return {
            date: formattedDate,
            weatherCode: weatherData.daily.weather_code[index],
            maxTemp: weatherData.daily.temperature_2m_max[index],
            minTemp: weatherData.daily.temperature_2m_min[index],
            windSpeed: weatherData.daily.wind_speed_10m_max[index]
          }
        });

        setWeatherData(formattedWeather)

      } else {
        console.log("No results found")
      }

    } catch (error) {
      console.log(error)
    }
  }


  // get lat long from entered town or city
  const fetchLatLong = async (place) => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(place)}&count=1`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const { latitude, longitude } = data.results[0];
        return { latitude, longitude }
      } else {
        console.log("No results found")
      }

    }
    catch (error) {
      console.log(error)
    }
  }

  const onSearch = async (query) => {
    setError("")
    setWeatherData([]) //clear previous error and data on a repeat search
    const location = await fetchLatLong(query)
    if (location) {
      fetchWeather(location.latitude, location.longitude)
    } else {
      setError("No results found, enter a town or city name")
    }
  }

  return (
    <Container>
      <Heading />
      <SearchBar onSearch={onSearch} />
      <CardContainer weatherData={weatherData} error={error} />
    </Container>
  )
}

export default App
