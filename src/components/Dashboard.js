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
            clickedShipment: null,
        };
    }

    componentDidMount() {
        const bearerToken = 'tTU3gFVUdP'
        let name = prompt("Please enter your Name to Continue");
        let email = prompt("Please enter your Email to Login");

        if(name && email) {
            fetch('https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/' + name, {
                method: 'POST',
                headers: {
                    "Content-type": 'application/json',
                    'Authorization': 'Bearer ' + bearerToken
                },
                body: JSON.stringify({
                    'email': email
                })
            })
                .then(res => {
                    return res.json();
                })
                .then(res => this.setState({ shipments: res.data }))
        } else {
            alert("Please add Name and Email to see Shipments")
        }
    }

    handleClick = (shipment) => {
        this.setState({ clickedShipment: shipment })
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ShipmentState shipments={this.state.shipments}/>
                <div className="ShipmentContainer">
                    <TimelineView
                    shipments={this.state.shipments}
                    clickedShipment={this.state.clickedShipment}/>
                    <Shipments 
                    shipments={this.state.shipments}
                    handleClick={this.handleClick}/>
                </div>
            </React.Fragment>
        );
    }
}

