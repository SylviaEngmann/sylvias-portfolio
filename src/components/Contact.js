import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const linkStyle = {
    textDecoration: 'none'
  };

const email = "sylvia.engmann8@gmail.com"

function Contact() {
        return(
            <div>
                <ul className="contactDiv">
                    <li>
                        <a 
                        href = {`mailto:${email}`}
                        style={linkStyle}
                        >
                            <FontAwesomeIcon 
                            className="contactIcon icon"
                            icon={faEnvelope} />
                            {/* Contact */}
                        </a>
                    </li>
                    <li>
                        <a href = "/portfolio"
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


