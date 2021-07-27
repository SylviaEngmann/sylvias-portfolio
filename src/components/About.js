import React from 'react';
import '../App.css';
import {Row, Col} from 'react-bootstrap';
import AboutImage from './AboutImage';
import AboutText from './AboutText';


function About () {

        return(
            <div>
                <Row>
                    <Col sm={0} md lg={3}>
                    </Col>
                    <Col sm={12} md lg={6}>
                        <AboutImage />
                    </Col>
                    <Col sm={0} md lg={3}></Col>
                </Row>
                <Row>
                    <Col sm={0} md lg={3}></Col>
                    <Col sm={12} md lg={6}>
                        <AboutText />
                    </Col>
                    <Col sm={0} md lg={3}></Col>
                </Row>
            </div>
                
        )
    }

export default About;