import React from 'react';
import './forumcreate.css';
import { Button } from '@material-ui/core';
// import Popup from './Popup';

interface ForumProps {
    sessionToken: any
}

interface ForumState {
    firstName: string,
    lastName: string,
    comment: string,
    // buttonPopup: boolean,
    sessionToken: any
}

class Forum extends React.Component<ForumProps, ForumState> {
    constructor(props: ForumProps) {
    super(props);

    this.state = {
        firstName: "",
        lastName: "",
        comment: "",
        // buttonPopup: true,
        sessionToken: localStorage.getItem("sessionToken")
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(this.props)
        fetch("http://localhost:3000/forum/create", {
            method: "POST",
            body: JSON.stringify({
                forum: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                comment: this.state.comment,
                }
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `SECRET ${this.state.sessionToken}`
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            }).catch (error => console.log(error))
    }

    render() {
      return (
        <div className="forumTable">
              <form onSubmit={this.handleSubmit}>
            <h1>
                Share your favorite travel tips!
            </h1>
            <input type="text" name="firstName" value={this.state.firstName} onChange={(e) => this.setState({firstName: e.target.value})} placeholder="First Name" />
            <br />
            <input type="text" name="lastName" value={this.state.lastName} onChange={(e) => this.setState({lastName: e.target.value})} placeholder="Last Name" />
            <br />
            <input className="comment" type="text" name="comment" value={this.state.comment} onChange={(e) => this.setState({comment: e.target.value})} placeholder="Comment" />
            <br />
            <br />
            <Button variant="contained" color="default" type="submit">Share</Button>
            < br />
            <Button className="button-2" variant="contained" color="default" type="submit" onClick={event =>  window.location.href='forum/all'}>View All Tips</Button>
            </form>
        </div>
      )
    }
  }
  
  export default Forum;

