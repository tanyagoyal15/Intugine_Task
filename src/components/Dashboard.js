import React, { Component } from 'react';
import NavBar from './NavBar';
import ShipmentState from './ShipmentState';
import Shipments from './Shipments';
import TimelineView from './TimelineView';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shipments: [],
            clickedShipment: null,
        };
    }

    componentDidMount() {
        const bearerToken = 'tTU3gFVUdP'
            fetch('https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/' + this.props.name, {
                method: 'POST',
                headers: {
                    "Content-type": 'application/json',
                    'Authorization': 'Bearer ' + bearerToken
                },
                body: JSON.stringify({
                    'email': this.props.email
                })
            })
                .then(res => {
                    return res.json();
                })
                .then(res => this.setState({ shipments: res.data }))
    }

    handleClick = (shipment) => {
        this.setState({ clickedShipment: shipment })
    }

    render() {
        return (
            <React.Fragment>
                <NavBar name={this.props.name}/>
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

