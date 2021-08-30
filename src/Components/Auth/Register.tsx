import React from 'react';
import './register.css'
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from './Login';

interface RegisterState {
    firstName: string,
    lastName: string, 
    email: string,
    password: string

}

class Register extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        fetch("http://localhost:3000/user/register", {
            method: "POST",
            body: JSON.stringify({ user: { firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, password: this.state.password 
            }
        }),
            headers: new Headers({
                "Content-Type": "application/json",

            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            // localStorage.setItem("email", data.firstName)
            localStorage.setItem("sessionToken", data.sessionToken)
        })
    }


    render() {
        return ( 
            <Router>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Register</h1>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={(e) => this.setState({firstName: e.target.value})} placeholder="First Name" />
                    <br />
                    <input type="text" name="lastName" value={this.state.lastName} onChange={(e) => this.setState({lastName: e.target.value})} placeholder="Last Name" />
                    <br />
                    <input type="text" name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} placeholder="Email" />
                    <br />
                    <input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} placeholder="Password" />
                    <Button variant="contained" color="default" type="submit">Register</Button>
                    <br />
                   <p>Already have an account?</p><Link to='/login'>Login</Link>
                </form>
            </div>
            <Switch>
            <Route exact path="/login">
                <Login />
            </Route>
            </Switch>
            </Router>
        );
    }
}

export default Register;