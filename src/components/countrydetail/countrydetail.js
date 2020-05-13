import React from 'react';
import { useParams } from "react-router-dom";
import './countrydetail.scss';
import BorderCountries from './bordercountries/bordercountries.js';
import BackButton from './backbutton/backbutton.js';

// Renders the country detail page
// Invokes the following child components: BackButton, BorderCountries
const CountryDetail = (props) => {
    // stores parameters from URL
    const params = useParams();

    // stores the country object that matches the parameter provided by the URL
    const country = props.countries.find(country => country.alpha3Code === params.country);
    console.log(country);

    // Takes array of objects and creates array of strings
    const currencies = [];
    country.currencies.map( (currency) => currencies.push(currency.code));

    // Takes array of objects and creates array of strings
    const languages = [];
    country.languages.map( (language) => languages.push(language.name));

    return (
        <div className='wrapper'>
            <BackButton />
            <div className='detail'>
                <div className='detail-lhs'>
                
                <img src={country.flag} alt="Flag"/>
                </div>
                <div className='detail-rhs'>
                <h2>{country.name}</h2>
                <div className='detail-info'>
                    <div>
                        <p><span>Native Name:</span> {country.nativeName} </p>
                        <p><span>Population:</span> {country.population}</p>
                        <p><span>Region:</span> {country.region}</p>
                        <p><span>Sub Region:</span> {country.subregion}</p>
                        <p><span>Capital:</span> {country.capital}</p>
                    </div>
                    <div>
                        <p><span>Top Level Domain:</span> {country.topLevelDomain}</p>
                        <p><span>Currencies:</span> {currencies.join(' ')}</p>
                        <p><span>Languages:</span> {languages.join(' ')}</p>
                    </div>
                </div>
                <BorderCountries countries={country.borders}/>
                </div>
            </div>
        </div>
    )
};

export default CountryDetail;