import React from 'react';


interface DestinationUpdateProps {
    sessionToken: any
  }
  
  interface DestinationUpdateState {
    city: string,
    country: string,
    attractions: string,
    notes: string,
    rating: number,
    sessionToken: any
  }

class DestinationUpdate extends React.Component<any, any> {
      constructor(props: any) {
          super(props)
          this.state = {
            destination: [],
            sessionToken: localStorage.getItem('sessionToken')
          }
          
      }

      updateDestination = (destination: any) => {
        fetch(`http://localhost:3000/destination/update/${destination}`, {
          method: "PUT",
          headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `SECRET ${this.state.sessionToken}`
          }),
        }).then((res) => console.log("destination updated"))
        .catch((err) => {
          console.log(err);
        })
      }
    

    render() {
        return (
          <div>
          </div>
        )
      }
    }
    
    export default DestinationUpdate;
    