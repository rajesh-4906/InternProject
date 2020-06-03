import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Apache_kafka.svg/96px-Apache_kafka.svg.png"  width="30" height="35" alt="brand"></img> Apache Kafka
                </Link>
                <Nav className="mr-auto">
                    <Link to={"add"} className="nav-link">Add Data</Link>
                    <Link to={"list"} className="nav-link">Fetch Data</Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;