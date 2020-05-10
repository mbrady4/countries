import React from 'react';
import { Link } from 'react-router-dom';
import './countrypanel.scss'

const CountryPanel = (props) => {
    return (
        <div className='countrypanel'>
            <Link to={'/' + props.country.alpha3Code}>
                <img src={props.country.flag} alt="Flag" />
                <div>
                <h2>{props.country.name}</h2>
                <h3><span>Population:</span> {props.country.population.toLocaleString()}</h3>
                <h3><span>Region:</span> {props.country.region}</h3>
                <h3><span>Capital:</span> {props.country.capital}</h3>
                </div>
            </Link>
        </div>
    )
}

export default CountryPanel;