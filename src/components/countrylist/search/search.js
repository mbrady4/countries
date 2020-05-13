import React from 'react';
import './search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Renders a search input field for the user to input a specific search
// Invokes onChange to pass user input to App.js
const Search = (props) => {
    return (
        <div className='search'>
            <FontAwesomeIcon className='searchIcon' icon={faSearch} />
            <label htmlFor='search'>
                <input  type='search' 
                        name='search'
                        id='search'
                        autoComplete='off'
                        onChange={props.inputChange}
                        placeholder='Search for a country...'/>
            </label>
        </div>
    )
}

export default Search;