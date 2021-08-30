import React from 'react';
import './destinationcreate.css';
import { Button } from '@material-ui/core';

interface DestinationProps {
    sessionToken: (sessionToken: any) => void
}

interface DestinationState {
    city: string,
    country: string,
    attractions: string,
    notes: string,
    rating: number,
    sessionToken: any,
}

class DestinationCreate extends React.Component<DestinationProps, DestinationState> {
    constructor(props: any) {
        super(props);

        this.state = {
            city: "",
            country: "",
            attractions: "",
            notes: "",
            rating: 1,
            sessionToken: localStorage.getItem("sessionToken")
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    } 

        handleSubmit = (e: any) => {
            e.preventDefault()
            console.log(this.props)
            fetch("http://localhost:3000/destination/create", {
                method: "POST",
                body: JSON.stringify({
                    destination: {
                    city: this.state.city,
                    country: this.state.country,
                    attractions: this.state.attractions,
                    notes: this.state.notes,
                    rating: this.state.rating
                    }
                }),
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": `SECRET ${this.props.sessionToken}`
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                }).catch (error => console.log(error))
        }
render() {
    return(
        <div className="creationTable">
             <form onSubmit={this.handleSubmit}>
            <h1>
                Share a location!
            </h1>
            <input type="text" name="city" value={this.state.city} onChange={(e) => this.setState({city: e.target.value})} placeholder="City" />
            <br />
            <input type="text" name="country" value={this.state.country} onChange={(e) => this.setState({country: e.target.value})} placeholder="Country" />
            <br />
            <input type="text" name="attractions" value={this.state.attractions} onChange={(e) => this.setState({attractions: e.target.value})} placeholder="Attractions" />
            <br />
            <input type="text" name="notes" value={this.state.notes} onChange={(e) => this.setState({notes: e.target.value})} placeholder="Notes" />
            <br />
            <input type="text" name="rating" value={this.state.rating} onChange={(e) => this.setState({rating: e.target.valueAsNumber})} placeholder="Rating" />
            <br />
            <Button variant="contained" color="default" type="submit">Share</Button>
            </form>
        </div>
  );

}
};

export default DestinationCreate;
