import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from './components/Welcome';
import AddingData from './components/AddingData';
import FetchingData from './components/FetchingData';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  const marginTop = {
    marginTop: "20px"
  }
  return (
    <Router>
        <NavigationBar/>
        <Container>
          <Row>
            <Col lg={12} style={marginTop}>
              <Switch>
                <Route path="/" exact component={Welcome}/>
                <Route path="/add" exact component={AddingData}/>
                <Route path="/list" exact component={FetchingData}/>
              </Switch>
            </Col>
          </Row>
        </Container>
        {/*<Footer/>  import Footer from './components/Footer';*/}
    </Router>
  );
}

export default App;
