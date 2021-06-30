import React from 'react';
import '../App.css';
import {Row, Col} from 'react-bootstrap';
import AboutImage from './AboutImage';
import AboutText from './AboutText';


function About () {

        return(
                <Row>
                    <Col>
                        <AboutImage />
                    </Col>
                    <Col>
                        <AboutText />
                    </Col>
                </Row>
                
        )
    }

export default About;