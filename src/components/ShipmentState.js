import React, { Component } from 'react'

export class ShipmentState extends Component {

    constructor(props) {
        super(props);
        this.state = {
            codes: {
                DEL : 0,
                INT : 0,
                OOD : 0,
                DEX : 0,
                NFI : 0,
                UND : 0
            },
            loaded : false
        };
    }

    componentDidUpdate() {
        if(this.state.loaded) return;
        let codes = this.state.codes;
        this.props.shipments.forEach(shipment => {
            const { current_status_code } = shipment;
            codes = {
                ...codes,
                [current_status_code] : codes[current_status_code] + 1
            };
        });
        this.setState({ codes, loaded : true})
    }
     render() {
        return (
            <div className="shipmentstateview">
                <ul>
                    <li>
                        <h6>DEL</h6>
                        <h2>{this.state.codes.DEL}</h2>
                    </li>
                    <li>
                        <h6>INT</h6>
                        <h2>{this.state.codes.INT}</h2>
                    </li>
                    <li>
                        <h6>OOD</h6>
                        <h2>{this.state.codes.OOD}</h2>
                    </li>
                    <li>
                        <h6>DEX</h6>
                        <h2>{this.state.codes.DEX}</h2>
                    </li>
                    <li>
                        <h6>UND</h6>
                        <h2>{this.state.codes.UND}</h2>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ShipmentState
