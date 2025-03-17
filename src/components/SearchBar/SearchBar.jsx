import React, { useState } from "react";
import * as styles from './SearchBar.module.css'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("")

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  // nice to have in addition to submit button
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      onSearch(query)
    }
  }

  return (
    <>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Enter a location..."
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
      <button onClick={() => onSearch(query)}>Search</button>
      </div>
    </>
  )
}

export default SearchBar