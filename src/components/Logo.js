import React from 'react';
import logo from '../assets/se-logo.png';
import '../App.css';


function Logo () {
        return(
                    <a
                    href="/"
                    >
                        <img
                        src={logo}
                        className="logo"
                        alt="logo"
                        />
                    </a>
            
        )
    }

export default Logo;