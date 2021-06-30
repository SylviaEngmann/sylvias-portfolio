import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import ContactForm from './ContactForm';

const linkStyle = {
    textDecoration: 'none'
  };

const email = "sylvia.engmann8@gmail.com"

function Contact() {
    

        return(
            <div>
                {/* 
                        <a 
                        href = {`mailto:${email}`}
                        style={linkStyle}
                        >
                        </a>
                     */}
                <Row>
                    <Col sm={12} md lg={3}><h2 style={{textAlign:'center'}}>Get In Touch</h2></Col>
                    <Col sm={12} md lg={9}><ContactForm /></Col>
                </Row>
            </div>
        )
    }

export default Contact;
