import React from 'react';
import './App.css';
import Landing from './Components/Landing/Landing';
// import Login from './Components/Auth/Login';
// import Register from './Components/Auth/Register';
// import DestinationCreate from './Components/Destination/DestinationCreate'
// import Forum from './Components/Forum/ForumCreate';
// import ForumView from './Components/Forum/ForumView'
// import DestinationView from './Components/Destination/DestinationView'
// import DestinationDisplay from './Components/Destination/DestinationDisplay';
// import DestinationTable from './Components/Destination/DestinationTable';

// interface DestinationProps {
//   sessionToken: (sessionToken: any) => void
// }

// type acceptedProps = {
//   sessionToken: string
//   fetchDestination: () => promise<any>
// }

type DestinationState = {
  city: string,
  country: string,
  attractions: string,
  notes: string,
  rating: number,
  sessionToken: any,
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Landing /> 
        {/* <DestinationCreate sessionToken /> */}
        {/* <Forum sessionToken /> */}
        {/* <ForumView />
        <DestinationView /> */}
      </div>
    )
  }
}

export default App;
