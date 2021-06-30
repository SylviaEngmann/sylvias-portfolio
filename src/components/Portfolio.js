import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import '../App.css';

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
                <Col sm={0} md lg={1}></Col>
                <Col sm={12} md lg={10}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title style={{fontWeight:'800', fontSize: '1.5rem'}}>my health passport.</Card.Title>
                            <Card.Text>
                            Having access to healthcare data at every point.
                            </Card.Text>
                            <Card.Footer>Built with React,  Node/ExpressJS and Postgres.</Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={0} md lg={1}></Col>
            </Row>

            <Row>
                <Col sm={0} md lg={1}></Col>
                <Col sm={12} md lg={10}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title style={{fontWeight:'800', fontSize: '1.5rem'}}>nota.</Card.Title>
                            <Card.Text>
                            A note taking application.
                            </Card.Text>
                            <Card.Footer>Built with React,  ExpressJS and MongoDB.</Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={0} md lg={1}></Col>
            </Row>

            <Row>
                <Col sm={0} md lg={1}></Col>
                <Col sm={12} md lg={10}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title style={{fontWeight:'800', fontSize: '1.5rem'}}>Eat It Upp</Card.Title>
                            <Card.Text>
                            A cafeteria management system.
                            </Card.Text>
                            <Card.Footer>Built with React,  Java and Postgres </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={0} md lg={1}></Col>
            </Row>
        </div>
        

        
    )
}

export default Portfolio;