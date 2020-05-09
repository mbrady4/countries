import React from 'react';
import CountryPanel from './countrypanel/countrypanel.js'
import './countrylist.scss';
import Selector from './selector/selector.js';
import Search from './search/search.js';

const CountryList = (props) => {
    return (
        <div>
            <div>
                <Search inputChange={props.inputChange} />
                <Selector inputChange={props.inputChange} />
            </div>
            <div className='countrylist'>
                { props.countries.map( (country, key) => {
                    return <CountryPanel country={country}/>
                }) }
            </div>
        </div>
    )
};

export default CountryList;