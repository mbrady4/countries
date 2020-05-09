import React from 'react';
import { useParams } from "react-router-dom";
import BorderCountries from './bordercountries/bordercountries.js';
import BackButton from './backbutton/backbutton.js';

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
        <div>
            <div>
            <BackButton />
            <img src={country.flag} alt="Flag"/>
            </div>
            <div>
            <h2>{country.name}</h2>
            <div>
                <p>Native Name: {country.nativeName} </p>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Sub Region: {country.subregion}</p>
                <p>Capital: {country.capital}</p>
            </div>
            <div>
                <p>Top Level Domain: {country.topLevelDomain}</p>
                <p>Currencies: {currencies.join(' ')}</p>
                <p>Languages: {languages.join(' ')}</p>
            </div>
            <BorderCountries countries={country.borders}/>
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