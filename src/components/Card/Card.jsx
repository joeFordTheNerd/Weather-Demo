import React from 'react'
import { getWeatherDetails } from '../../utils/weatherCodes'

function Card({weather}) {
const {description, icon} = getWeatherDetails(weather.weatherCode)

  return (
    <div>
        <div>{weather.date}</div>
        <div> {icon} </div>
        <div>{description}</div>
        <div>High: {weather.maxTemp}°C / Low: {weather.minTemp}°C </div>
        {/* todo: check wind units in briefing */}
        <div>Wind: {weather.windSpeed} km/h</div>
    </div>
  )
}

export default Card