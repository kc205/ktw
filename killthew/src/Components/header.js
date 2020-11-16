import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './logo.png';
import './../CSS/header.css'
class Header extends React.Component {
    render() {
        var style = {
            brand: {
                margin: 0,
                padding: 0,
                paddingTop: '10px'
            },
            logostyle: {
                maxHeight: '100%',
                width: 160,
                height: 160,
            },
            rightBs: {
                float: 'right',
                paddingLeft: '450px',
            }
        };
        
        return (
            <div className="containenr">
                <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                    <div className="container-fluid">
                        <Navbar.Brand style={style.brand} to="/">
                            <img src={logo} style={style.logostyle} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <li><Link to="/visits">Visits</Link></li>
                            <li><Link to="/books">Books</Link></li>
                            <li><Link to="/donates">Donations</Link></li>
                        </Navbar.Collapse>
                        <Navbar.Collapse id="navbar-nav navbar-right" style={style.rightBs}>
                            <li><Link to="/register"><span className="glyphicon glyphicon-user"></span>Sign Up</Link></li>
                            <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span>Login</Link></li>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;