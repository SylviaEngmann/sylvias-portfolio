import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const linkStyle = {
    textDecoration: 'none'
  };

function Contact() {
        return(
            <div>
                <ul className="contactDiv">
                    <li>
                        <a 
                        href = "#home"
                        style={linkStyle}
                        >
                            <FontAwesomeIcon 
                            className="contactIcon icon"
                            icon={faEnvelope} />
                            {/* Contact */}
                        </a>
                    </li>
                    <li>
                        <a href = "#home"
                        style={linkStyle}
                        >
                            <FontAwesomeIcon 
                            className="contactIcon icon"
                            icon={faBriefcase} />
                            {/* Portfolio */}
                        </a>
                    </li>
                </ul>
            </div>
        )
    }


export default Contact;


