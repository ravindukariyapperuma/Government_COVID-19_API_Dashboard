import React, { Component } from 'react'
import Chart from './Map'
import axios from 'axios'
import './card.css';
import totalcases from '../img/healthcheck.png'
import cemetery from '../img/cemetery.png'
import hospital_bed from '../img/bed.png'


export class OtherDataSL extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
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
                totalCases : response.data.data.local_total_cases,
                totalDeaths: response.data.data.local_deaths,
                activeCases: response.data.data.local_active_cases,
         })
         console.log('new',this.state.newCases);
        })
    
    }
    

    render() {
        return (
            <div style={{marginTop: "5%"}}>
                <div className="row">
                    <div className="col-md-3">
                    <div className="row-md">
                            <div className="card1">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        <div className="col-3" style={{marginLeft: "5%"}}>
                                            <img src={totalcases} width="135%"/>
                                        </div>
                                        <div className="col" style={{textAlign: "left"}}>
                                            <h5><b>Total Cases<br/>
                                            <div style={{backgroundColor: "#0d47a1", color:"white"}}>
                                                &nbsp; {this.state.totalCases}
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="row-md">
                            <div className="card1">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        <div className="col-3" style={{marginLeft: "5%"}}>
                                            <img src={cemetery} width="135%"/>
                                        </div>
                                        <div className="col" style={{textAlign: "left"}}>
                                            <h5><b>Total Deaths<br/>
                                            <div style={{backgroundColor: "#0d47a1", color:"white"}}>
                                                &nbsp; {this.state.totalDeaths}
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="row-md">
                            <div className="card1">
                                <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                    <div className="row">
                                        <div className="col-3" style={{marginLeft: "5%"}}>
                                            <img src={hospital_bed} width="135%"/>
                                        </div>
                                        <div className="col" style={{textAlign: "left"}}>
                                            <h5><b>Active Cases<br/>
                                            <div style={{backgroundColor: "#0d47a1", color:"white"}}>
                                                &nbsp; {this.state.activeCases}
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        

                    </div>
                    <div className="col-md">
                        <Chart/>
                    </div>
                </div>
            </div>
        )
    }
}

export default OtherDataSL
