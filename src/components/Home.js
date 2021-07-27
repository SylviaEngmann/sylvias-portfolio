import React from 'react';
import '../App.css';
import {Row, Col} from 'react-bootstrap';
import Socials from './Socials';
import Intro from './Intro';
import ProfileImage from './ProfileImage';



function Home () {

        return(
            <div className="home-screen">
                <Row>
                    <Col sm={12} md lg={4}>
                        <Socials />
                    </Col>
                    <Col sm={12} md lg={4}>
                        <Intro />
                    </Col>
                    <Col sm={12} md lg={4}>
                        <ProfileImage />
                    </Col>
                </Row>
            </div> 
        )
    }

export default Home;