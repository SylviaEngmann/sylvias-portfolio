import React, {Component} from 'react';
import '../App.css';

const linkStyle = {
    textDecoration: 'none',
    
  };

class Logo extends Component {
    render() {
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
}

export default Logo;