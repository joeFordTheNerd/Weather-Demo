import React from 'react'

function Card({weather}) {
  return (
    <div>
        <div>{weather.date}</div>
        {/* todo - check weather codes and see if these can be mapped to real weather */}
        <div>Weather Icon</div>
        {/* todo: decide on how we'll handle "description" from data we have */}
        <div>Weather Description</div>
        {/* todo: combine min-max for compact layout */}
        <div>Max Temp: {weather.maxTemp}°C</div>
        <div>Min Temp: {weather.minTemp}°C</div>
        {/* todo: check wind units in briefing */}
        <div>Wind Speed: {weather.windSpeed} km/h</div>
    </div>
  )
}

export default Card