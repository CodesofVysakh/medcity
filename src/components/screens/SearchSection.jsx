import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch  } from "@fortawesome/free-solid-svg-icons";

function SearchSection() {
  return (
    <section id="hero">
        <div className="search-input">
            <input type="text" placeholder="Search..." />
            <div className="search-icon-container">
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
    </section>
  )
}

export default SearchSection