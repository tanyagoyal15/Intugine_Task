import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="navbar-logo">
                    {/* <img src='/public/logo.svg' alt=" "/> */}
                    <h4>Intugine</h4>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Brands</li>
                    <li>Transporters</li>
                </ul>
            </div>
        )
    }
}

export default NavBar
