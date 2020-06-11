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

import Header from './Header'
import SLData from './OtherDataSL'


export class MainData extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             newCases: "",
             newDeaths: "",
             hospitalized: "",
             recoveries: "",
             totalCases: "",
             totalDeaths: "",
             activeCases: "",
        }
    }

    componentDidMount(){
        axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
        .then(response=>{
          console.log(response.data);
            this.setState({
                newCases : response.data.data.local_new_cases,
                newDeaths: response.data.data.local_new_deaths,
                hospitalized: response.data.data.local_total_number_of_individuals_in_hospitals,
                recoveries: response.data.data.local_recovered,
                totalCases : response.data.data.local_total_cases,
                totalDeaths: response.data.data.local_deaths,
                activeCases: response.data.data.local_active_cases,
         })
         console.log('new',this.state.newCases);
        })
    
    }
    

    render() {
        return (
            <div>
            <div style={{marginTop: "2%"}}>
                <div className="" style={{marginLeft: "1%", marginRight: "1%"}}>
                    <div className="border border-primary" style={{backgroundColor: "#595454", opacity: "0.9"}}>
                    <div className="row" style={{marginTop: "1%", marginLeft: "1%", marginRight: "1%"}}>
                      
                        <div className="col-md-3">
                            <div className="card1">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        <div className="col-3" style={{marginLeft: "5%"}}>
                                            <img src={newcases} width="135%"/>
                                        </div>
                                        <div className="col" style={{textAlign: "left"}}>
                                            <h5><b>New Cases<br/>
                                            <div style={{backgroundColor: "#0099CC", color:"white"}}>
                                                &nbsp; <font size="6">{this.state.newCases}</font>
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card1">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        <div className="col-3" style={{marginLeft: "5%"}}>
                                            <img src={pluz} width="135%"/>
                                        </div>
                                        <div className="col" style={{textAlign: "left"}}>
                                            <h5><b>New Deaths<br/>
                                            <div style={{backgroundColor: "#ff4444", color:"white"}}>
                                                &nbsp; <font size="6">{this.state.newDeaths}</font>
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card1">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        <div className="col-3" style={{marginLeft: "5%"}}>
                                            <img src={pluse} width="135%"/>
                                        </div>
                                        <div className="col" style={{textAlign: "left"}}>
                                            <h5><b>Hospitalized<br/>
                                            <div style={{backgroundColor: "#FF8800", color:"white"}}>
                                                &nbsp; <font size="6">{this.state.hospitalized}</font>
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card1">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        <div className="col-3" style={{marginLeft: "5%"}}>
                                            <img src={cases} width="135%"/>
                                        </div>
                                        <div className="col" style={{textAlign: "left"}}>
                                            <h5><b>Recoveries<br/>
                                            <div style={{backgroundColor: "#00C851", color:"white"}}>
                                                &nbsp; <font size="6">{this.state.recoveries}</font>
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row" style={{marginTop: "1%", marginLeft: "1%", marginRight: "1%"}}>
                        <div className="col-md-3">
                            <div className="card1">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        <div className="col-3" style={{marginLeft: "5%"}}>
                                            <img src={tot} width="135%"/>
                                        </div>
                                        <div className="col" style={{textAlign: "left"}}>
                                            <h5><b>Total Cases<br/>
                                            <div style={{backgroundColor: "#ffa726", color:"white"}}>
                                                &nbsp; <font size="6">{this.state.totalCases}</font>
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card1">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        <div className="col-3" style={{marginLeft: "5%"}}>
                                            <img src={Tdeath} width="135%"/>
                                        </div>
                                        <div className="col" style={{textAlign: "left"}}>
                                            <h5><b>Total Deaths<br/>
                                            <div style={{backgroundColor: "#8d6e63", color:"white"}}>
                                                &nbsp; <font size="6">{this.state.totalDeaths}</font>
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card1">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        <div className="col-3" style={{marginLeft: "5%"}}>
                                            <img src={active} width="135%"/>
                                        </div>
                                        <div className="col" style={{textAlign: "left"}}>
                                            <h5><b>Active Cases<br/>
                                            <div style={{backgroundColor: "#59698d", color:"white"}}>
                                                &nbsp; <font size="6">{this.state.activeCases}</font>
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card1">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        <div className="col-3" style={{marginLeft: "5%"}}>
                                            <img src={graph} width="135%"/>
                                        </div>
                                        <div className="col" style={{textAlign: "left"}}>
                                            <h5><b>Recovery Rate<br/>
                                            <div style={{backgroundColor: "#03a9f4", color:"white"}}>
                                                &nbsp; <font size="6">{Math.round((this.state.recoveries/this.state.totalCases)*100* 10) / 10}%</font>
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>


                    {/* <SLData/> */}
                </div>
            </div>
            </div>
        )
    }
}

export default MainData
