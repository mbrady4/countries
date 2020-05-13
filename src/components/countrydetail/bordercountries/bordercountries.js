import React from 'react';
import { Link } from 'react-router-dom';
import './bordercountries.scss';

// Renders a list of link buttons which direct a user to the specified country
// If provided list is empty, renders 'None'
const BorderCountries = (props) => {
    return (
        <div className='border-buttons'>
            <p>Border Countries: </p>
            { (props.countries.length === 0) ? <span>None</span> :
               props.countries.map( (countryCode, key) => {
                const path = '/' + countryCode;
                return <Link to={path} key={key}>{countryCode}</Link>
            })}
        </div>
    )
};

export default BorderCountries;