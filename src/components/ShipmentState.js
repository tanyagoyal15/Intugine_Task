import React, { Component } from 'react'

export class ShipmentState extends Component {


    // status = (code) => {
    //     let delcount = 0;
    //     if (code === 'DEL') {
    //         delcount++;
    //         // console.log(delcount);
    //         // return <p>DEL</p>
    //     }
    //     if (code === 'INT') {
    //         // intcount++;
    //         // return <p>INT</p>
    //     }
    //     if (code === 'OOD') {
    //         // oodcount++;
    //         // return <p>OOD</p>
    //     }
    //     if (code === 'DEX') {
    //         // dexcount++;
    //         // return <p>DEX</p>
    //     }
    //     if (code === 'NFI') {
    //         // nficount++;
    //         // return <p>NFI</p>
    //     }
    //     // console.log(delcount)
    //     // return delcount;
    // }



    render() {
        return (
            <div className="shipmentstateview">
                {/* { 
                    this.props.shipments.map((shipment) => {
                        // let delcount = this.status(shipment.current_status_code);   
                    })                   
                } */}
            </div>
        )
    }
}

export default ShipmentState
