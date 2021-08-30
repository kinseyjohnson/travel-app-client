import React from "react";
// import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import '../Landing/header.css'
import Register from '../Auth/Register';
import Login from '../Auth/Login';

class Header extends React.Component {
    render() {
        return (
            <Router>
            <header>
                <nav>
                <ul>
                    <Link to="/register">
                        <li>Get Started</li>
                    </Link>
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <li className="logo">NextQuest</li>
                </ul>
                </nav>
                </header>
            <Switch>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
            </Router>
        )
    }
}

export default Header; 