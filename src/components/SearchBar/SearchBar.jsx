import React from 'react'
import * as styles from './SearchBar.module.css'

function SearchBar() {
  return (
    <div className={styles.searchBar}>
        <input type="text" placeholder="Enter a location..." />
    </div>
  )
}

export default SearchBar