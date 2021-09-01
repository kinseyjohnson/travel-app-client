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



class ForumView extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    
    this.state = {
      forum: [],
      sessionToken: localStorage.getItem('sessionToken')
      
    };
  
    // this.mapper = this.mapper.bind(this)
  }

  componentDidMount() {
    console.log("Component Mounted")
    fetch("http://localhost:3000/forum/all", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `SECRET ${this.state.sessionToken}`
      }),
    })
      .then((res) => res.json())
      .then( data => this.setState({
        forum: data[7]
      }))

}

  displayContent = (data: any) => {
    let forum = data.data
    console.log(data)
    console.log(forum)
    // let result = forum.map(())
  }
   

    render() {
      // const items = this.state.forum.map(())
      return (
        <div>
            <h1>Forum</h1>
            <h3>What's your favorite travel hack?</h3>
            <br />
          <Table bordered style={{backgroundColor: "white"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{this.state.forum.firstName}</td>
          <td>{this.state.forum.lastName}</td>
          <td>{this.state.forum.comment}</td>
        </tr>
        {/* <tr>
          <th scope="row">2</th>
          <td>New York</td>
          <td>USA</td>
          <td>Empire State Building</td>
          <td>The best city in the world... if you can get past the rats</td>
          <td>5</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Indianapolis</td>
          <td>USA</td>
          <td>Nothing</td>
          <td>Nothing</td>
          <td>1</td>
        </tr> */}
      </tbody>
    </Table>
    <Button variant="contained" color="default" type="submit" >Edit</Button>
    <Button variant="contained" color="default" type="submit">Delete</Button>
        </div>
      )
    }
  }

export default ForumView; 