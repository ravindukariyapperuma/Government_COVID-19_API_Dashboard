import React, { Component } from 'react'
import logo from '../img/virus.png'

export class Header extends Component {
    render() {
        return (
            <div style={{marginBottom: "1%"}}>
                <div className="row">
                    <div className="col-md-3">
                <img src={logo} width="40px"/>
                </div>
                <div className="col-md-12">
                <h2>COVID-19 DASHBOARD</h2>
                </div>
                </div>
                
            </div>
        )
    }
}

export default Header
