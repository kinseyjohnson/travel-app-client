import React from "react";
import "./landing.css";
// import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Header from "./Header";
import { Button } from '@material-ui/core';

class Landing extends React.Component {
    

    render() {
        return (
            <div>
                <Header />
                <h1>ADVENTURE IS WAITING FOR YOU</h1>
                <h3>Get started with NextQuest to find your next expedition</h3>
                <div className="button-position">
                <Button className="button-1" variant="contained" color="default" type="submit" onClick={event =>  window.location.href='/login'}>Login</Button>
                <br />
                <Button className="button-2" variant="contained" color="default" type="submit" onClick={event =>  window.location.href='/register'}>Register</Button>
                </div>
            </div>
        )
    }
}

export default Landing; 