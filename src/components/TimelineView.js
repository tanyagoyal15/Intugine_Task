import React, { Component } from 'react'

export class TimelineView extends Component {
    render() {
        return (
            <div className="timelineview">
                <ul className="timeline">
                    {this.props.clickedShipment ? (this.props.clickedShipment.scan.map((item, idx) => {
                        return <li className="box">
                            <div style={{'border' : '1px solid #000'}}>
                                <p>{item.location}</p>
                                <p>{item.time}</p>
                            </div>
                        </li>
                }
                )) : <h4>Click on the Shipment to view Timeline</h4>}
                </ul>
            </div>
        )
    }
}

export default TimelineView
