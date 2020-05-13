import React from 'react';
import './countrylist.scss';
import CountryPanel from './countrypanel/countrypanel.js'
import Selector from './selector/selector.js';
import Search from './search/search.js';

// Components renders the main country list homepage view which includes the filters and the list of active countries
// Component invokes child components: Search, Selector, and CountryPanel
const CountryList = (props) => {
    return (
        <div className='countrylist'>
            <div className='wrapper'>
                <div className='filters'>
                    <Search inputChange={props.inputChange} />
                    <Selector inputChange={props.inputChange} />
                </div>
                <div className='grid'>
                    { props.countries.map( (country, key) => {
                        return <CountryPanel country={country}/>
                    }) }
                </div>
            </div>
        </div>
    )
};

export default CountryList;