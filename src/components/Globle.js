import React, { Component } from 'react'
import './card.css';
import axios from 'axios'

import newcases from '../img/search.gif'
import pluse from '../img/pluse.gif'
import pluz from '../img/pulz.gif'
import cases from '../img/hospital logo.gif'
import graph from '../img/graph.gif'
import Tdeath from '../img/Tdeath.gif'
import active from '../img/active.gif'
import tot from '../img/tot.gif'
import district_heatmap from '../img/district_heatmap.png'
import world from '../img/world.gif'

export class Globle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            global_new_cases: "",
            global_total_cases: "",
            global_deaths: "",
            global_new_deaths: "",
            global_recovered:"",
            lastUpdate: "",

        }
    }

    componentDidMount(){
        axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
        .then(response=>{
          console.log(response.data);
            this.setState({
                global_new_cases : response.data.data.global_new_cases,
                global_total_cases: response.data.data.global_total_cases,
                global_deaths: response.data.data.global_deaths,
                global_new_deaths: response.data.data.global_new_deaths,
                global_recovered : response.data.data.global_recovered,
                lastUpdate: response.data.data.update_date_time,
         })
         console.log('new',this.state.newCases);
        })
    
    }
    

    render() {
        return (
            <div>
                <div className="border border-primary" style={{backgroundColor: "#223561", opacity: "1",marginBottom: "2%", color: "#000000",textAlign: "center"}}>
                <div className="row" style={{marginTop: "1%", marginLeft: "1%", marginRight: "1%"}}>
                <div className="col-md" style={{color: "#ffffff"}}>
                <h3><img src={world} width="40px"/> Global Figures</h3> <hr color= "#ffffff"/>
                </div>
                </div>
                <div className="row" style={{marginTop: "0%", marginLeft: "1%", marginRight: "1%", marginBottom: "0%"}}>
                      
                <div className="col-md-2">
                            <div className="card1">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        
                                        <div className="col" style={{textAlign: "center"}}>
                                            <h5><b>New Cases<br/>
                                            <div style={{backgroundColor: "#0099CC", color:"white"}}>
                                                <font size="6">{this.state.global_new_cases}</font>
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card1">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        
                                        <div className="col" style={{textAlign: "center"}}>
                                            <h5><b>New Deaths<br/>
                                            <div style={{backgroundColor: "#ff4444", color:"white"}}>
                                                <font size="6">{this.state.global_new_deaths}</font>
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card1">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        
                                        <div className="col" style={{textAlign: "center"}}>
                                            <h5><b>Total Cases<br/>
                                            <div style={{backgroundColor: "#FF8800", color:"white"}}>
                                                <font size="6">{this.state.global_total_cases}</font>
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card1">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        
                                        <div className="col" style={{textAlign: "center"}}>
                                            <h5><b>Total Deaths<br/>
                                            <div style={{backgroundColor: "#8d6e63", color:"white"}}>
                                                <font size="6">{this.state.global_deaths}</font>
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card1">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        
                                        <div className="col" style={{textAlign: "center"}}>
                                            <h5><b>Recoveries<br/>
                                            <div style={{backgroundColor: "#00C851", color:"white"}}>
                                                <font size="6">{this.state.global_recovered}</font>
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card1">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        
                                        <div className="col" style={{textAlign: "center"}}>
                                            <h5><b>Recovery Rate<br/>
                                            <div style={{backgroundColor: "#03a9f4", color:"white"}}>
                                                <font size="6">{Math.round((this.state.global_recovered/this.state.global_total_cases)*100* 10) / 10}%</font>
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row" style={{marginTop: "0%", marginLeft: "1%", marginRight: "1%"}}>
                <div className="col-md" style={{color: "#ffffff", textAlign: "center"}}>
                Last updated at: {this.state.lastUpdate} <hr color= "#ffffff"/>
                </div>
                </div>
                    

                    </div>
            </div>
        )
    }
}

export default Globle
