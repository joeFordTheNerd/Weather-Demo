import React from 'react'
import { getWeatherDetails } from '../../utils/weatherCodes'
import * as styles from './Card.module.css'
function Card({weather}) {
const {description, icon} = getWeatherDetails(weather.weatherCode)

  return (
    <div className={styles.card}>
        <div className={styles.date}>{weather.date}</div>
        <div className={styles.icon}> {icon} </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.temp}>High: {weather.maxTemp}°C / Low: {weather.minTemp}°C </div>
        <div className={styles.wind}>Wind: {weather.windSpeed} km/h</div>
    </div>
  )
}

export default Card