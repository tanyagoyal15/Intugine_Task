import React, { Component } from 'react'
import NavBar from './NavBar';
import Shipments from './Shipments';
import ShipmentState from './ShipmentState';
import TimelineView from './TimelineView';

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shipments : []
        }

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




    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ShipmentState shipments={this.state.shipments}/>
                <div className="ShipmentContainer">
                    <TimelineView />
                    <Shipments shipments={this.state.shipments}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Dashboard
