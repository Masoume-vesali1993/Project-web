import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <ul>
            <li>
                <link to="/">Home</link>
                <link to="/about">About</link>
                <link to="/contact">Contact</link>
                <link to="/projects">Projects</link>
            </li>
        </ul>
    )
}