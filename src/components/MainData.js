import React, { Component } from 'react'
import './card.css';

export class MainData extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentDidUpdate(){

    }
    

    render() {
        return (
            <div style={{marginTop: "2%"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card1">
                                trtru
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card1">
                                trtru
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card1">
                                trtru
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card1">
                                trtru
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainData
