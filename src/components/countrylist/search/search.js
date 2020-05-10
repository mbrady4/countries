import React from 'react';
import './search.scss';

const Search = (props) => {
    return (
        <div className='search'>
            <label htmlFor='search'>
                <input  type='search' 
                        name='search'
                        onChange={props.inputChange}
                        placeholder='Search for a country...'/>
            </label>
        </div>
    )
}

export default Search;