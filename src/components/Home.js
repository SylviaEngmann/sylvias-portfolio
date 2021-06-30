import React from 'react';
import '../App.css';
import {Row, Col} from 'react-bootstrap';
import Socials from './Socials';
import Intro from './Intro';
import ProfileImage from './ProfileImage';



function Home () {

        return(
            <div >
                <Row>
                    <Col>
                        <Socials />
                    </Col>
                    <Col>
                        <Intro />
                    </Col>
                    <Col>
                        <ProfileImage />
                    </Col>
                </Row>
            </div> 
        )
    }

export default Home;