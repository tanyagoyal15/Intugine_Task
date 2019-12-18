import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Shipments from './components/Shipments';
import ShipmentState from './components/ShipmentState';
import TimelineView from './components/TimelineView';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar />
        <ShipmentState />
        <div className="ShipmentContainer">
          <TimelineView />
          <Shipments />
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
