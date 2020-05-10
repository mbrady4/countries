import React from 'react';
import { Link } from 'react-router-dom';
import './bordercountries.scss';

const BorderCountries = (props) => {
    return (
        <div className='border-buttons'>
            <p>Border Countries:</p>
            {props.countries.map( (countryCode, key) => {
                const path = '/' + countryCode;
                return <Link to={path} key={key}>{countryCode}</Link>
            })}
        </div>
    )
};

export default BorderCountries;