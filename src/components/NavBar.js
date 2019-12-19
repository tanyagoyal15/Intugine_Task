import React, { Component } from 'react';

import logo from '../public/logo.svg';
import profile from '../public/profile.svg';

export class NavBar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt=" " style={{width : '40px' , height : '40px'}} />
                    <h4>Intugine</h4>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Brands</li>
                    <li>Transporters</li>
                    <li><img style={{ width: '25px', height: '25px', backgroundColor: '#ccc', borderRadius: '50%' , padding : '4px'}} src={profile} alt=" " /></li>
                </ul>
            </div>
        )
    }
}

export default NavBar
