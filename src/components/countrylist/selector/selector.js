import React from 'react';
import './selector.scss';

const Selector = (props) => {
    return (
        <form className='selector'>
            <label htmlFor='region'>
                <select id='region' 
                        name='region'
                        onChange={props.inputChange}>
                    <option value="" selected disabled hidden>Filter by Region</option>
                    <option value='Americas'>Americas</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='Asia'>Asia</option>
                    <option value='Africa'>Africa</option>
                </select>
            </label>
        </form>
    )
};

export default Selector; 