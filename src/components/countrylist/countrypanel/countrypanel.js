import React from 'react';
import { Link } from 'react-router-dom';
import './countrypanel.scss'

const CountryPanel = (props) => {
    return (
        <div className='countrypanel'>
            <Link to={'/' + props.country.alpha3Code}>
                <img src={props.country.flag} alt="Flag" />
                <h2>{props.country.name}</h2>
                <h3>Population: {props.country.population}</h3>
                <h3>Region: {props.country.region}</h3>
                <h3>Capital: {props.country.capital}</h3>
            </Link>
        </div>
    )
}

export default CountryPanel;