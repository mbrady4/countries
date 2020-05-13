import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import './App.scss';
import CountryList from './components/countrylist/countrylist.js';
import NavBar from './components/navbar/navbar.js';
import CountryDetail from './components/countrydetail/countrydetail.js';

function App() {
  // State of countries datat returned by the GET request
  const [countries, setCountries] = useState();

  // State to hold the active countries based on user filtering
  const [activeCountries, setActiveCountries] = useState(countries)

  // State to hold the active filter values
  const [filters, setFilters] = useState({
    search:'',
    region:''
  });

  // State to track if the Get request has been returned and if filtering has been applied
  const [loaded, setLoaded] = useState(false);
  const [activeLoaded, setActiveLoaded] = useState(false);
  

  // Helper function to update filter state when filter form values are changed
  const inputChange = event => {
    event.persist()
    const newFilters = {
      ...filters,
      [event.target.name]: event.target.value
    }
    setFilters(newFilters);
  }

  // useEffect w/Axios to make GET request for all countries
  useEffect( () => {
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;nativeName;subregion;currencies;languages;flag;borders;alpha3Code;topLevelDomain")
      .then(response => {
        setCountries(response.data)
        setLoaded(true)
      })
      .catch(error => console.log(error));
  }, []);

  // useEffect to filter the countries state to the activeCountries state based on filters state
  // runs when countries, filters, or loaded state is changed
  useEffect( () => {
    if (loaded) {
      let tempCountries = []
      if (filters.region.length > 0) {
        for (let i = 0; i < countries.length; i++) {
          if(countries[i].region === filters.region) {
            tempCountries.push(countries[i]);
          }
        }
      }
      else {
        tempCountries = countries;
      }
      let filteredCountries = [];
      if (filters.search.length > 0) {
        for (let i = 0; i < tempCountries.length; i++) {
          if(filters.search.toLowerCase() === tempCountries[i].name.slice(0,filters.search.length).toLowerCase()) {
            filteredCountries.push(tempCountries[i])
          }
        }
      }
      else {
        filteredCountries = tempCountries;
      }
      setActiveCountries(filteredCountries);
      setActiveLoaded(true)
    }
  }, [countries, filters, loaded]);

  // Routes app to correct views based on path. Renders appropriate components
  return (
    <div className="App">
      { !activeLoaded ? <h1>Loading...</h1> :
      <Router>
        <Switch>
          <Route path='/:country'>
            <NavBar />
            <CountryDetail countries={countries} />
          </Route>
          <Route path="/">
            <NavBar />
            <CountryList countries={activeCountries}
                          filters={filters}
                          inputChange={inputChange}/>
          </Route>
        </Switch>
      </Router>
      }
    </div>
    );
}

export default App;