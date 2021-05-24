import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card'
import '../App.css';

const linkStyle = {
    textDecoration: 'none'
  };

const email = "sylvia.engmann8@gmail.com"

function Contact() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        return(
            <div>
                <ul className="contactDiv">
                    <li>
                        <a 
                        href = {`mailto:${email}`}
                        style={linkStyle}
                        >
                            <FontAwesomeIcon 
                            className="contactIcon icon"
                            icon={faEnvelope} />
                        </a>
                    </li>
                    <li>
                        <FontAwesomeIcon 
                        className="contactIcon icon"
                        icon={faBriefcase} 
                        onClick={handleShow}
                        />
                    </li>
                </ul>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Projects</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Roubenka Lindava</Card.Title>
                                    <Card.Text>
                                    A website built in Wordpress, for a country cottage in the Czech Republic.
                                    </Card.Text>
                                    <Card.Link 
                                    href="https://www.roubenka-lindava.cz/" 
                                    target = "_blank"
                                    rel = "noreferrer"
                                    >Website
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>My Health Passport</Card.Title>
                                    <Card.Text>
                                    A web application that allows doctors/hospitals to have access to patient data from previous healthcare point.
                                    Built in React JS, Express JS and Postgres. 
                                    </Card.Text>
                                    <Card.Link 
                                    href="https://github.com/SylviaEngmann/my-health-passport" 
                                    target = "_blank"
                                    rel = "noreferrer"
                                    >Github
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title>My Portfolio</Card.Title>
                                    <Card.Text>
                                    A sigle page application for displaying contact details and projects, built in ReactJS. 
                                    </Card.Text>
                                    <Card.Link 
                                    href="https://sylviaengmann.herokuapp.com/" 
                                    target = "_blank"
                                    rel = "noreferrer"
                                    >Website
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </Modal.Body>
                </Modal>
            </div>
        )
    }

export default Contact;
