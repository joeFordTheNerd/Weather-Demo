import React, { useState } from "react"
import Card from "./components/Card/Card"
import CardContainer from "./components/CardContainer/CardContainer"
import SearchBar from "./components/SearchBar/SearchBar"
import Heading from "./components/Header/Header"
import Container from "./components/Container/Container"

function App() {

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
      }else{
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
      console.log(`Lat/Long:`, location.latitude, location.longitude)
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
