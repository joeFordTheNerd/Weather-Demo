import React from 'react'
import * as styles from './CardContainer.module.css'

function CardContainer({children}) {
  return (
    <div className={styles.cardContainer}>
      {children}
    </div>
  )
}

export default CardContainer