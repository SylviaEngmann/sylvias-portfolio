import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faBehance} from '@fortawesome/free-brands-svg-icons';
import '../App.css';


class Socials extends Component {
    render() {
        return(
            <div className="socials">
                <ul>
                    <li>
                        <a href = "https://linkedin.com/in/sylvia-monalisa-engmann">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a href = "https://github.com/SylviaEngmann">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a href = "https://twitter.com/SylviaEngmann">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a href ="https://www.behance.net/sylviaengmann">
                            <FontAwesomeIcon icon={faBehance} />
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Socials;