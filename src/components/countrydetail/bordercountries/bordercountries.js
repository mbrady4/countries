import React from 'react';
import { Link } from 'react-router-dom';

const BorderCountries = (props) => {
    return (
        <div>
            <p>Border Countries:</p>
            {props.countries.map( (countryCode, key) => {
                const path = '/' + countryCode;
                return <Link to={path} key={key}>{countryCode}</Link>
            })}
        </div>
    )
};

export default BorderCountries;