import React from 'react'
import * as styles from './CardContainer.module.css'
import Card from '../Card/Card'


function CardContainer({ weatherData }) {
  return (
    <div className={styles.cardContainer}>
      {weatherData.length > 0 ? (
        weatherData.map((day, index) => (
          <Card key={index} weather={day} />
        ))
      ) : (
        <p>Enter a location to see the weather</p>
      )
      }
    </div>
  )
}

export default CardContainer