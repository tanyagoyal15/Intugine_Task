import React, { Component } from 'react';
import NavBar from './NavBar';
import ShipmentState from './ShipmentState';
import Shipments from './Shipments';
import TimelineView from './TimelineView';

export default class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            shipments: [],
            clickedShipment: null
        };
    }

    componentDidMount() {
            fetch('https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank', {
                method: 'POST',
                headers: {
                    "Content-type": 'application/json',
                    'Authorization': 'Bearer tTU3gFVUdP'
                },
                body: JSON.stringify({
                    'email': 'mayankmittal@intugine.com'
                })
            })
            .then(res => {
                return res.json();
            })
            .then(res => this.setState({ shipments : res.data}))
        }


    handleClick = (shipment) => {
        this.setState({ clickedShipment: shipment })
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ShipmentState />
                <div className="ShipmentContainer">
                    <TimelineView
                    clickedShipment={this.state.clickedShipment}/>
                    <Shipments 
                    shipments={this.state.shipments}
                    handleClick={this.handleClick}/>
                </div>
            </React.Fragment>
        );
    }
}

