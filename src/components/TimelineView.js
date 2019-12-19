import React, { Component } from 'react'
import warehouse from '../public/warehouse.svg';
import destination from '../public/destination.svg';

export class TimelineView extends Component {
    render() {
        return (
            <div className="timeline-container">
                <ul className="timeline">
                    {this.props.clickedShipment ? (
                        <div>
                            <img src={warehouse} alt=" " />
                            {this.props.clickedShipment.scan.map((item, idx) => {
                            return <li className="box">
                                <div className="shipment-status">
                                    <p>{item.location}</p>
                                    <p>{item.time}</p>
                                </div>
                            </li>
                            })}
                            <img src={destination} alt=" " />
                        </div>
                ) : <h4 style={{'textAlign' : 'center'}}>Click on the Shipment to view Timeline</h4>}
                </ul>
            </div>
        )
    }
}

export default TimelineView
