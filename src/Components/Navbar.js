import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </li>
        </ul>
    )
}

export default NavBar;