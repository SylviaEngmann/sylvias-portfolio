import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Contact from './components/Contact';
import Socials from './components/Socials';
import Logo from './components/Logo';
import ProfileImage from './components/ProfileImage';
import Intro from './components/Intro';


function App() {
  return (
      <Container fluid>
        <Row>
          <Col sm={6}>
            <Logo />
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Socials />
          </Col>
          <Col sm={9}>
            <Row>
              <Col sm={6}>
                <Intro/>
              </Col>
              <Col sm={6}>
                <ProfileImage />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <Contact />
          </Col>
        </Row>
      </Container>
  );
}

export default App;