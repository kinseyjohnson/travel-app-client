import React from 'react';
import './App.css';
import Landing from './Components/Landing/Landing';
// import Login from './Components/Auth/Login';
// import Register from './Components/Auth/Register';
import DestinationCreate from './Components/Destination/DestinationCreate'
import Forum from './Components/Forum/ForumCreate';
import ForumView from './Components/Forum/ForumView';
import DestinationView from './Components/Destination/DestinationView'


// interface DestinationProps {
//   sessionToken: (sessionToken: any) => void
// }

// type acceptedProps = {
//   sessionToken: string
//   fetchDestination: () => promise<any>
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Landing /> 
        <DestinationCreate sessionToken />
        <Forum sessionToken />
        <ForumView />
        <DestinationView />
        {/* <DestinationDisplay /> */}
      </div>
    )
  }
}

export default App;
