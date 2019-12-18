import React, { Component } from 'react'

export class Shipments extends Component {
    render() {
        return (
            <div className="shipmentsview">
                <ul style={{ "listStyle": "none", "padding": "0" , "display" : "flex" , "flexDirection" : "row" , "justifyContent" : "space-around"}}>
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
                    {
                        this.props.shipments.map((shipment) => {
                            // const startdate = shipment.pickup_date.slice(0, shipment.pickup_date.indexOf(' '))
                            // const enddate = shipment.time.slice(0, shipment.time.indexOf(' '))
                            return <li key={shipment._id}>
                                <ul style={{"display": "flex", "flexDirection": "row", "justifyContent": "space-around", "listStyle": "none", 'border': '1px solid #000', "padding": '10px 0' , "margin" : "15px 10px" , "fontSize" : "11px"}}>
                                    <li>{shipment.awbno}</li>
                                    <li>{shipment.carrier}</li>
                                    <li>{shipment.from}</li>
                                    <li>{shipment.to}</li>
                                    <li>{shipment.awbno}</li>
                                    <li>{shipment.pickup_date}</li>
                                    <li>{shipment.time}</li>
                                    <li>{shipment.current_status}</li>
                                </ul>
                            </li>;
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Shipments
