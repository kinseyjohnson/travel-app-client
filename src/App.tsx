import React from 'react';
import './App.css';
import Landing from './Components/Landing/Landing';
// import Login from './Components/Auth/Login';
// import Register from './Components/Auth/Register';
import DestinationCreate from './Components/Destination/DestinationCreate'

interface DestinationProps {
  sessionToken: (sessionToken: any) => void
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Landing /> 
        {/* <DestinationCreate /> */}
      </div>
    )
  }
}

export default App;
