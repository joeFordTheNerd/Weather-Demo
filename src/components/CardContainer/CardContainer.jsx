import React from 'react'
import * as styles from './CardContainer.module.css'
import Card from '../Card/Card'


function CardContainer({ weatherData, error }) {
  return (
    <div className={styles.cardContainer}>
      {error && <div className={styles.error}>{error}</div>}
      {weatherData.length > 0 &&
        weatherData.map((day, index) => <Card key={index} weather={day} />)}

    </div>
  )
}

export default CardContainer