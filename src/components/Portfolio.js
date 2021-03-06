import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../App.css';
import { faCodeBranch, faGlobe } from '@fortawesome/free-solid-svg-icons';

const cardStyle = {
    marginTop: '1rem',
    marginBottom: '1rem',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)'
}

function Portfolio() {
    return(
        <div>
            <Row>
                <Col sm={0} md lg={3}></Col>
                <Col sm={12} md lg={6}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title style={{fontWeight:'800', fontSize: '1.5rem'}}>my health passport.</Card.Title>
                            <Card.Text>
                            Having access to healthcare data at every point.   
                            </Card.Text>
                            <Card.Footer>Built with React,  Node/ExpressJS and Postgres.</Card.Footer>
                            <div className="codeLinks">
                                <ul>
                                    <li>
                                        <a 
                                        target = "_blank"
                                        rel = "noreferrer"
                                        href="https://github.com/SylviaEngmann/my-health-passport.">
                                            <FontAwesomeIcon icon={faCodeBranch} />
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                        target = "_blank"
                                        rel = "noreferrer"
                                        href="https://myhealthpassport.herokuapp.com">
                                            <FontAwesomeIcon icon={faGlobe} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={0} md lg={3}></Col>
            </Row>

            <Row>
                <Col sm={0} md lg={3}></Col>
                <Col sm={12} md lg={6}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title style={{fontWeight:'800', fontSize: '1.5rem'}}>nota.</Card.Title>
                            <Card.Text>
                            A note taking application.
                            </Card.Text>
                            <Card.Footer>Built with React,ExpressJS and MongoDB.</Card.Footer>
                            <div className="codeLinks">
                                <ul>
                                    <li>
                                        <a 
                                        target = "_blank"
                                        rel = "noreferrer"
                                        href="https://github.com/SylviaEngmann/nota">
                                            <FontAwesomeIcon icon={faCodeBranch} />
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                        target = "_blank"
                                        rel = "noreferrer"
                                        href="https://nota-app-notes.herokuapp.com/">
                                            <FontAwesomeIcon icon={faGlobe} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={0} md lg={3}></Col>
            </Row>

            <Row>
                <Col sm={0} md lg={3}></Col>
                <Col sm={12} md lg={6}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title style={{fontWeight:'800', fontSize: '1.5rem'}}>Eat It Up</Card.Title>
                            <Card.Text>
                            A cafeteria management system.
                            </Card.Text>
                            <Card.Footer>Built with React,Java and Postgres </Card.Footer>
                            <div className="codeLinks">
                                <ul>
                                    <li>
                                        <a 
                                        target = "_blank"
                                        rel = "noreferrer"
                                        href="https://github.com/SylviaEngmann/eat-it-up">
                                            <FontAwesomeIcon icon={faCodeBranch} />
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                        target = "_blank"
                                        rel = "noreferrer"
                                        href="https://eat-it-up.herokuapp.com/">
                                            <FontAwesomeIcon icon={faGlobe} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={0} md lg={3}></Col>
            </Row>
        </div>
        

        
    )
}

export default Portfolio;