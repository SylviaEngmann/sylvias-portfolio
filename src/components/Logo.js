import React from 'react';
import '../App.css';

const linkStyle = {
    textDecoration: 'none',
    
  };

function Logo () {
        return(
            
                    <a 
                    className="home"
                    style={linkStyle}
                    href="#home"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    SME.
                    </a>
            
        )
    }

export default Logo;