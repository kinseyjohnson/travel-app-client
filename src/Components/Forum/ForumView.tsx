import React from 'react';
import './forumcreate.css';
import { Table } from 'reactstrap';
import { Button } from '@material-ui/core';

interface ForumViewProps {
  sessionToken: any
}

interface ForumViewState {
  firstName: string,
  lastName: string,
  comment: string,
  sessionToken: any
}

// const ForumDisplay = () => {
//   return props.forum.map()
// }

class ForumView extends React.Component<any, ForumViewState> {
  constructor(props: any) {
    super(props)
    
    this.state = {
      firstName: "",
      lastName: "",
      comment: "",
      sessionToken: localStorage.getItem('sessionToken')
      
    };

  }

  componentDidMount() {
    console.log("Component Mounted")
    // console.log(this.state.city)
    // console.log(this.state.country)
    // console.log(this.state.attractions)
    // console.log(this.state.notes)
    // console.log(this.state.rating)
    fetch("http://localhost:3000/forum/all", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `SECRET ${this.state.sessionToken}`
      }),
    })
      .then((res) => res.json())
      .then( data => (
        
        console.log(data)
      ))
  
  }

    render() {
      return (
        <div>
          <h1>Travel Tips</h1>
          <br />
          <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Travel Tip</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{this.state.firstName}</td>
          <td>{this.state.lastName}</td>
          <td>{this.state.comment}</td>
        </tr>
        {/* <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
    <Button variant="contained" color="default" type="submit">Edit</Button>
    <Button variant="contained" color="default" type="submit">Delete</Button>
        </div>
      )
    }
  }

export default ForumView; 