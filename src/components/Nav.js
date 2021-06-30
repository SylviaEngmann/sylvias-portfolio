import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Nav() {
    return (
        <div className="">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;