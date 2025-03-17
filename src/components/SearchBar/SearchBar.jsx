import React, { useState } from "react";
import * as styles from './SearchBar.module.css'

function SearchBar({onSearch}) {
  const [query, setQuery] = useState("")
  
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleEnter = (e) => {
    if(e.key === 'Enter') {
      onSearch(query)
    }
  }

  return (
    <div className={styles.searchBar}>
        <input 
          type="text" 
          placeholder="Enter a location..."
          onChange={handleChange}
          onKeyDown={handleEnter}
          />
    </div>
    // todo - add a submit button and make it look nice
  )
}

export default SearchBar