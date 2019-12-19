import React, { Component } from 'react'

export class Shipments extends Component {
    render() {
        return (
            <div className="shipments-container">
                <ul className="shipmentshead">
                    <li>AWB Number</li>
                    <li>Transporter</li>
                    <li>Source</li>
                    <li>Destination</li>
                    <li>Brand</li>
                    <li>Start Date</li>
                    <li>End Date</li>
                    <li>Status</li>
                </ul>
                <ul style={{"listStyle" : "none" , "padding" : "0"}}>
                    {this.props.shipments.map((shipment, idx) => {
                        return <li key={shipment._id}>
                            <ul className="shipmentslist" onClick={(e) => this.props.handleClick(shipment)}>
                                <li>#{shipment.awbno}</li>
                                <li>{shipment.carrier}</li>
                                <li>{shipment.from}</li>
                                <li>{shipment.to}</li>
                                <li>{shipment.carrier}</li>
                                <li>{shipment.pickup_date}</li>
                                <li>{shipment.time}</li>
                                <li>{shipment.current_status}</li>
                            </ul>
                        </li>;
                    }
                    )}
                </ul>
            </div>
        )
    }
}

export default Shipments
