import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const NavBar = (props) => {
    return (
        <nav>
            <div className='wrapper'>
                <Link to={"/"}><h1>Where in the World?</h1></Link>
                {/* Potential future future will include a dark mode */}
                {/* <button className='dark-mode'>
                    <img src={require("../../icons/darkmode.png")} alt='dark mode icon'/>
                    <p>Dark Mode</p></button> */}
            </div>
        </nav>
    )
};

export default NavBar;