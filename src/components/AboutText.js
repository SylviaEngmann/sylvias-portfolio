import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import '../App.css';


function AboutText (){
        return(
                <ul>
                    <li>
                    <FontAwesomeIcon icon="check-square" />
                    I am a FullStack Software Engineer who enjoys
                    a good design, and interested in continuous 
                    learning and improvement.
                    </li>
                    <li>
                    <FontAwesomeIcon icon="check-square" />
                    I design with <strong>AdobeXD</strong>, build on
                    the FrontEnd with <strong>ReactJS</strong>, 
                    and on the BackEnd, <strong>Node/ExpressJS, Java[SpringBoot] </strong>
                    and <strong>PostgreSQL</strong> for databases.
                    </li>
                </ul>
                
        )
    }


export default AboutText;