import React, { useState } from "react"
import Card from "./components/Card/Card"
import CardContainer from "./components/CardContainer/CardContainer"
import SearchBar from "./components/SearchBar/SearchBar"
import Heading from "./components/Header/Header"
import Container from "./components/Container/Container"

function App() {

  const fetchWeather = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max&timezone=auto&forecast_days=5`
      );
      const weatherData = await response.json();
      if (weatherData.daily) {
        //get the data we want for the weather cards and return a clean object
        const formattedWeather = weatherData.daily.time.map((date, index) => ({
          date: date,
          weatherCode: weatherData.daily.weather_code[index],
          maxTemp: weatherData.daily.temperature_2m_max[index],
          minTemp: weatherData.daily.temperature_2m_min[index],
          windSpeed: weatherData.daily.wind_speed_10m_max[index]
        }));

        console.log(formattedWeather)

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
    const location = await fetchLatLong(query)
    if (location) {
      fetchWeather(location.latitude, location.longitude)

    }
  }

  return (
    <Container>
      <Heading />
      <SearchBar onSearch={onSearch} />
      <CardContainer>
        <Card />
      </CardContainer>
    </Container>
  )
}

export default App
