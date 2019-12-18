import React, { Component } from 'react'

export class TimelineView extends Component {
    render() {
        return (
            <div className="timelineview">
                {this.props.clickedShipment ? (this.props.clickedShipment.scan.map((item, idx) => {
                    return <ul className="timeline">
                        <li>{item.location}</li>
                        <li>{item.time}</li>
                    </ul>
                }
                )) : <h4>Click on the Shipment to view Timeline</h4>}
            </div>
        )
    }
}

export default TimelineView
