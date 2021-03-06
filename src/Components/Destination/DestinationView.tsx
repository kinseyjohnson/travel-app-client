import React from 'react';
import { Table } from 'reactstrap';
import { Button } from '@material-ui/core';

interface DestinationViewProps {
  sessionToken: any
}

interface DestinationViewState {
  city: string,
  country: string,
  attractions: string,
  notes: string,
  rating: number,
  sessionToken: any
}

// function destinationArray(){
//   const destinationDate = []
// }

class DestinationView extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    
    this.state = {
      destination: [],
      sessionToken: localStorage.getItem('sessionToken')
      
    };
  
    // this.mapper = this.mapper.bind(this)
  }

  componentDidMount() {
    console.log("Component Mounted")
    fetch("http://localhost:3000/destination/all", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `SECRET ${this.state.sessionToken}`
      }),
    })
      .then((res) => res.json())
      .then( data => this.setState({
        destination: data
      }))

}


  // displayContent = (data: any) => {
  //   let destination = data.data
  //   console.log(data)
  //   console.log(destination)
  //   // let result = destination.map(())
  // }
   

  deleteDestination = (destination: any) => {
    fetch(`http://localhost:3000/destination/delete/${destination}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `SECRET ${this.state.sessionToken}`
      }),
    }).then((res) => console.log("destination delete, refresh page"))
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <>
      <h2 style={{textAlign: "center", margin: "20px"}}>
        Find Your Next Adventure
      </h2>
    <Table bordered style={{backgroundColor: "white"}}>
    <thead>
      <tr>
        <th>#</th>
        <th>City</th>
        <th>Country</th>
        <th>Attractions</th>
        <th>Notes</th>
        <th>Rating</th>
        <th>Edit or Delete</th>
      </tr>
    </thead>
    {this.state.destination.map((destination: any)=> (
      <tbody> 
      <tr>
        <th scope="row">{destination.id}</th>
        <td>{destination.city}</td>
        <td>{destination.country}</td>
        <td>{destination.attractions}</td>
        <td>{destination.notes}</td>
        <td>{destination.rating}</td>
        <td><Button variant="contained" color="default" type="submit" >Edit</Button> 
        <Button variant="contained" color="default" type="submit" onClick={()=> this.deleteDestination(destination.id)}>Delete</Button></td>
      </tr>
      </tbody>
    ))}
  </Table>
  
  </>
    )
  }
  
}

export default DestinationView; 