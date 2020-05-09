import React from 'react';

const Search = (props) => {
    return (
        <form>
            <label htmlFor='search'>
                <input  type='text' 
                        name='search'
                        onChange={props.inputChange}
                        placeholder='Search for a country...'/>
            </label>
        </form>
    )
}

export default Search;