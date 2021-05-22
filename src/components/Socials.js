import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faBehance} from '@fortawesome/free-brands-svg-icons';
import '../App.css';


function Socials() {
        return(
            <div className="socials">
                <ul>
                    <li>
                        <a 
                        target = "_blank"
                        rel = "noreferrer"
                        href = "https://linkedin.com/in/sylvia-monalisa-engmann">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a 
                        target = "_blank"
                        rel = "noreferrer"
                        href = "https://github.com/SylviaEngmann">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    {/* <li>
                        <a 
                        target = "_blank"
                        rel = "noreferrer"
                        href = "https://twitter.com/SylviaEngmann">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li> */}
                    <li>
                        <a 
                        target = "_blank"
                        rel = "noreferrer"
                        href ="https://www.behance.net/sylviaengmann">
                            <FontAwesomeIcon icon={faBehance} />
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

export default Socials;