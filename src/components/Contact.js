import React from 'react';
import {Row, Col} from 'react-bootstrap';
import '../App.css';
import ContactForm from './ContactForm';

// const linkStyle = {
//     textDecoration: 'none'
//   };

// const email = "sylvia.engmann8@gmail.com"

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
                    <Col></Col>
                    <Col sm={12} md lg={6}>
                        <h2 style={{textAlign:'center'}}>Get In Touch</h2>
                        
                        <ContactForm />
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        )
    }

export default Contact;
