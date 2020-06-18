import React, { Component } from 'react'
import './card.css';
import axios from 'axios'
import  { Redirect, Link } from 'react-router-dom'
import newcases from '../img/search.gif'
import pluse from '../img/pluse.gif'
import pluz from '../img/pulz.gif'
import cases from '../img/hospital logo.gif'
import graph from '../img/graph.gif'
import Tdeath from '../img/Tdeath.gif'
import active from '../img/active.gif'
import tot from '../img/tot.gif'
import district_heatmap from '../img/district_heatmap.png'
import lanka from '../img/lanka.gif'
import world from '../img/world.gif'

import Hospital from './Hospital'
import Globle from './Globle'

import Header from './Header'
import SLData from './OtherDataSL'
import ChartSL from './ChartSL'
import pcrData from './pcrData'


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
             lastUpdate: "",
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
                lastUpdate: response.data.data.update_date_time,
         })
         console.log('new',this.state.newCases);
        })
    
    }

    formatNumber (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }
    

    render() {
        return (
            <div>
            <div style={{marginTop: "1%"}}>
                <div className="" style={{marginLeft: "1%", marginRight: "1%"}}>
                    <div className="border border-primary" style={{backgroundColor: "#223561", opacity: "1",marginBottom: "1%", color: "#ffffff",textAlign: "center"}}>
                        <h1>COVID-19 : Live Situational Analysis Dashboard of Sri Lanka</h1>
                    </div>

                    {/* <div className="border border-primary" style={{backgroundColor: "#223561", opacity: "1",marginBottom: "2%", color: "#ffffff",textAlign: "center"}}>
                    Last updated at: {this.state.lastUpdate}
                    </div> */}

                    <div className="border border-primary" style={{backgroundColor: "#223561", opacity: "1", marginBottom: "2%",}}>

                    {/* <div className="row" style={{marginTop: "1%", marginLeft: "1%", marginRight: "1%", color: "#ffffff", textAlign: "center"}}>
                        <h3>ftewt</h3>
                    </div> */}

<div className="row" style={{marginTop: "1%", marginLeft: "1%", marginRight: "1%"}}>
                <div className="col-md" style={{color: "#ffffff", textAlign: "center"}}>
                <h3><img src={lanka} width="50px"/> Sri Lanka Figures<hr color= "#ffffff"/> </h3>
                </div>
                </div>

                    <div className="row" style={{marginTop: "0%", marginLeft: "1%", marginRight: "1%"}}>
                      
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
                                                &nbsp; <font size="6">{this.formatNumber(this.state.newCases)}</font>
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
                                                &nbsp; <font size="6">{this.formatNumber(this.state.newDeaths)}</font>
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
                                                &nbsp; <font size="6">{this.formatNumber(this.state.hospitalized)}</font>
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
                                                &nbsp; <font size="6">{this.formatNumber(this.state.recoveries)}</font>
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row" style={{marginTop: "1%", marginLeft: "1%", marginRight: "1%", marginBottom: "0%"}}>
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
                                                &nbsp; <font size="6">{this.formatNumber(this.state.totalCases)}</font>
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
                                                &nbsp; <font size="6">{this.formatNumber(this.state.totalDeaths)}</font>
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
                                                &nbsp; <font size="6">{this.formatNumber(this.state.activeCases)}</font>
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
                    <div className="row" style={{marginTop: "0%", marginLeft: "1%", marginRight: "1%"}}>
                <div className="col-md" style={{color: "#ffffff", textAlign: "center"}}>
                Last updated at: {this.state.lastUpdate} <hr color= "#ffffff"/>
                </div>
                </div>
                    </div>


                    {/* <SLData/> */}

                    {/* <div className="row">
                        <div className="col-md">
                        <div className="border border-primary" style={{backgroundColor: "#223561", opacity: "1",marginBottom: "1%", color: "#ffffff",textAlign: "center"}}>
                        <PCRChart/>
                    </div>
                            </div>
                            <div className="col-md" style={{backgroundColor: "#223561", color: "", textAlign: "center"}}>
                            <img src={district_heatmap} width="50%"/>
                            </div>
                        </div> */}

                        <div>
                            <Globle/>
                            </div>

                            <div>
                            <div className="border border-primary" style={{backgroundColor: "#", opacity: "1",marginBottom: "2%", color: "#000000",textAlign: "center"}}>
                
                <div className="row" style={{marginTop: "1%", marginLeft: "1%", marginRight: "1%", marginBottom: "1%"}}>
                      
                <div className="col-md-4">
                <Link to={'/Hospital'}>
                                <button class="button button2">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        
                                        <div className="col" style={{textAlign: "center"}}>
                                            <h5><i class="fa fa-hospital fa-lg"></i><br/><b>Sri Lankan hospitals overview
                                            
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                                </button>
                                </Link>
                        </div>

                        <div className="col-md-4">
                        <Link to={'/pcrData'}>
                        <button class="button button2">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        
                                        <div className="col" style={{textAlign: "center"}}>
                                            <h5><i class="fa fa-flask fa-lg"></i><br/><b>&nbsp;Sri Lankan PCR testing data &nbsp;<br/>
                                            
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                                </button>
                                </Link>
                        </div>

                        <div className="col-md-4">
                        <Link to={'/ChartSL'}>
                        <button class="button button2">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        
                                        <div className="col" style={{textAlign: "center"}}>
                                            <h5><i class="fa fa-file fa-lg"></i><br/><b>&nbsp;&nbsp; Sri Lanka data distribution &nbsp;&nbsp;<br/>
                                            
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            </Link>
                        </div>

                    </div>

                    
                    

                    </div>
                            </div>


                        <div className="border border-primary" style={{backgroundColor: "#223561", opacity: "1",marginBottom: "2%", color: "#ffffff",textAlign: "center"}}>
                        © 2020 Digitally Crafted by RAVINDU LAKSHAN KARIYAPPERUMA &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Source: <a href="https://hpb.health.gov.lk/en/api-documentation">www.hpb.health.gov.lk</a>
                    </div>

                    

                </div>
            </div>
            </div>
        )
    }
}

export default MainData
