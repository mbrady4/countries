import React from 'react';
import CountryPanel from './countrypanel/countrypanel.js'
import './countrylist.scss';
import Selector from './selector/selector.js';
import Search from './search/search.js';

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