import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav>
            <div className='wrapper'>
                <Link to={"/"}><h1>Where in the World?</h1></Link>
                {/* <button className='dark-mode'>
                    <img src={require("../../icons/darkmode.png")} alt='dark mode icon'/>
                    <p>Dark Mode</p></button> */}
            </div>
        </nav>
    )
};

export default NavBar;