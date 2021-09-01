import React from "react";
// import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import '../Landing/header.css'
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import DestinationCreate from '../Destination/DestinationCreate';
import ForumCreate from '../Forum/ForumCreate';
import DestinationView from '../Destination/DestinationView';
// import DestinationTable from '../Destination/DestinationTable';

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
                    <Link to="/destination/all">
                        <li>View All</li>
                    </Link>
                    <Link to="/destination/create">
                        <li>Destinations</li>
                    </Link>
                    <Link to="/forum/create">
                        <li>Tips</li>
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
                <Route exact path="/destination/all">
                    <DestinationView/>
                </Route>
                <Route exact path="/destination/create">
                    <DestinationCreate sessionToken />
                </Route>
                <Route exact path="/forum/create">
                    <ForumCreate sessionToken />
                </Route>
            </Switch>
            </Router>
        )
    }
}

export default Header; 