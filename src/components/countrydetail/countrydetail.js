import React from 'react';
import { useParams } from "react-router-dom";
import BorderCountries from './bordercountries/bordercountries.js';
import BackButton from './backbutton/backbutton.js';
import './countrydetail.scss';

const CountryDetail = (props) => {
    const params = useParams();
    // console.log(params.country);
    // const match = useRouteMatch();
    // console.log('match', match);  

    const country = props.countries.find(country => country.alpha3Code === params.country);
    console.log(country);

    const currencies = [];
    country.currencies.map( (currency) => currencies.push(currency.code));

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

/*
alpha3Code: "USA"
borders: (2) ["CAN", "MEX"]
capital: "Washington, D.C."
currencies: [{…}]
flag: "https://restcountries.eu/data/usa.svg"
languages: [{…}]
name: "United States of America"
population: 323947000
region: "Americas"
subregion: "Northern America"
topLevelDomain: [".us"]
*/