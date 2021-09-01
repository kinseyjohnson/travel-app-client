import React from 'react';
import { Table } from 'reactstrap';
import { Button } from '@material-ui/core';
import ForumView from '../Forum/ForumView';

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

class DestinationView extends React.Component<any, DestinationViewState> {
  constructor(props: any) {
    super(props)
    
    this.state = {
      city: "",
      country: "",
      attractions: "",
      notes: "",
      rating: 0,
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
      .then( data => 
        console.log(data))
  }

  displayContent = (data: any) => {
    let destination = data
    console.log(destination)
    // let result = destination.map(())
  }
   

    render() {
      // const items = this.state.destination.map(())
      return (
        <div>
            <h1>Travel Destinations</h1>
            <br />
          <Table bordered style={{backgroundColor: "white"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>City</th>
          <th>Country</th>
          <th>Attractions</th>
          <th>Notes</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{this.state.city}</td>
          <td>{this.state.country}</td>
          <td>{this.state.attractions}</td>
          <td>{this.state.notes}</td>
          <td>{this.state.rating}</td>
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
    <ForumView />
        </div>
      )
    }
  }

export default DestinationView; 