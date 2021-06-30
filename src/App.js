import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import { Switch, Route, Router, useHistory } from 'react-router-dom';
import Contact from './components/Contact';
import Logo from './components/Logo';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import createHistory from 'history/createBrowserHistory';
import Portfolio from './components/Portfolio';

const history = createHistory({forceRefresh:true}); 

function App() {
  return (
      <Container fluid>

        <Row>
          <Col sm={12} md lg={3}>
            <Logo />
          </Col>
          <Col sm={12} md lg={9}>
            <Nav />
          </Col>
        </Row>
        
          <Switch>
            <Route path="/" exact>
              < Home/>
            </Route>

            <Route path="/about">
              <About />
            </Route>

           <Route path="/portfolio">
              <Portfolio />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
      </Container>
  );
}

export default App;