import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const linkStyle = {
    textDecoration: 'none'
  };

class Contact extends Component {
    render() {
        return(
            <div className="contactDiv">
                <ul>
                    {/* <li>
                        <a 
                        href = "#home"
                        style={linkStyle}
                        >
                            <FontAwesomeIcon 
                            className="contactList"
                            icon={faEnvelope} />
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href = "#home"
                        style={linkStyle}
                        >
                            <FontAwesomeIcon 
                            className="contactList"
                            icon={faBriefcase} />
                            Portfolio
                        </a>
                    </li> */}
                </ul>
            </div>
        )
    }
}

export default Contact;


