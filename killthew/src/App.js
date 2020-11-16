'use strict';
import React, {useState} from 'react';
import './App.css';
import './CSS/w3.css';
import Header from './Components/header';
import Visits from './Components/visits';
import Donates from './Components/donates';
import Books from './Components/books';
import Login from './Components/login';
import Register from './Components/register';
import Home from './Components/home';
import AlertComponent from './Components/alert.js';  

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const NavRoute = ({exact, path, component: Component}) => (
    <Route exact={exact} path={path} render={(props) => (
        <div>
            <Header />
            <Component {...props}/>
        </div>
    )}/>
)

function App() {
  const [errorMessage, updateErrorMessage] = useState(null);
    return (
        <div className="fluid-container" style={{width:'75%', marginLeft: 'auto', marginRight: 'auto'}}>
            <Router>
                <Header />
                <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
                <Switch>
                    <Route path="/register">
                        <Register showError={updateErrorMessage} />
                    </Route>
                    <Route path="/books">
                        <Books showError={updateErrorMessage} />
                    </Route>
                    <Route path="/visits">
                        <Visits showError={updateErrorMessage} />
                    </Route>
                    <Route path="/donates">
                        <Donates showError={updateErrorMessage} />
                    </Route>
                    <Route path="/login">
                        <Login showError={updateErrorMessage} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;