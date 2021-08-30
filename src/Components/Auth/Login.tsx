import React from 'react';
import './login.css';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Register from './Register';


interface LoginState {
    email: string,
    password: string
}

class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            email: "",
            password: "",
            sessionToken: localStorage.getItem("sessionToken")
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        fetch("http://localhost:3000/user/login", {
            method: "POST",
            body: JSON.stringify({ user: { email: this.state.email, password: this.state.password 
            }
        }),
            headers: new Headers({
                "Content-Type": "application/json",

            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            localStorage.setItem("sessionToken", data.sessionToken)
        })
    }


    render() {
        return ( 
            <Router>
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                    <input type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} placeholder="Email" />
                    <br />
                    <input type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} placeholder="Password" />
                    <br />
                    <Button variant="contained" color="default" type="submit">Login</Button>
                    <br />
                   <p>Don't have an account?</p>
                   <Link to='/register'>Sign up</Link>
                    <br />
                </form>
            </div>
            <Switch>
            <Route exact path="/register">
                <Register />
            </Route>
            </Switch>
            </Router>
        );
    }
}

export default Login;