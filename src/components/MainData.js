import React, { Component } from 'react'
import './card.css';
import axios from 'axios'
import newcases from '../img/search.gif'
import pluse from '../img/pluse.gif'
import pluz from '../img/pulz.gif'
import cases from '../img/hospital logo.gif'
import Header from './Header'


export class MainData extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             newCases: "",
             newDeaths: "",
             hospitalized: "",
             recoveries: "",
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
         })
         console.log('new',this.state.newCases);
        })
    
    }
    

    render() {
        return (
            <div style={{marginTop: "2%"}}>
                <div className="container">
                    <div className="row">
                        
                    </div>
                    <div className="row">
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
                                                &nbsp; {this.state.newCases}
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
                                                &nbsp; {this.state.newDeaths}
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
                                                &nbsp; {this.state.hospitalized}
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
                                                &nbsp; {this.state.recoveries}
                                            </div>
                                            </b></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default MainData
