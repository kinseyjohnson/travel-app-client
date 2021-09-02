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
      .then( data => this.setState({ forum: data }))

}

  displayContent = (data: any) => {
    let forum = data.data
    console.log(data)
    console.log(forum)
    // let result = forum.map(())
  }
   
  // deleteForum = (forum: any) => {
  //   fetch(`http://localhost:3000/forum/delete/${id}}`, {
  //     method: "DELETE",
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       "Authorization": `SECRET ${this.state.sessionToken}`
  //     }),
  //   }).then((res) => console.log("deleted"))
  // }

    render() {
      // const items = this.state.forum.map(())
      return (
      <Table bordered style={{backgroundColor: "white"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Comment</th>
          <th>Edit or Delete</th>
        </tr>
      </thead>
      {this.state.forum.map((forum: any)=> (
        <tbody> 
        <tr>
          <th scope="row">{forum.id}</th>
          <td>{forum.firstName}</td>
          <td>{forum.lastName}</td>
          <td>{forum.comment}</td>
          <td><Button variant="contained" color="default" type="submit" >Edit</Button> 
          <Button variant="contained" color="default" type="submit">Delete</Button></td>
        </tr>
        </tbody>
      ))}
    </Table>
      )
    }
  }

export default ForumView; 