import React, { Component } from 'react'
import axios from 'axios'
import './card.css';

export class Hospital extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data: [],
        }
    }

    componentDidMount(){
        axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
        .then(response=>{
          console.log(response.data.data.hospital_data);

            this.setState({
                
                data :  response.data.data.hospital_data.map(data=>data),
         })
         console.log('data',this.state.data);
        })
    
    }
    
    render() {
        return (
            <div>
                <div style={{marginTop: "1%"}}>
                <div className="" style={{marginLeft: "1%", marginRight: "1%"}}>
                    <div className="border border-primary" style={{backgroundColor: "#223561", opacity: "1",marginBottom: "1%",marginTop: "0%", color: "#ffffff",textAlign: "center"}}>
                        <h1> <i class="fa fa-hospital fa-md"></i> Sri Lankan hospitals overview</h1>
                    </div>
                </div>
                </div>


                <div className="row" style={{marginTop: "0%", marginLeft: "1%", marginRight: "1%"}}>
                {this.state.data.map(data => (
                      
                      <div className="col-md-4">
                          <div className="card1">
                              <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                  <div className="row">
                                  
                                      
                                      <div className="col" style={{textAlign: "center"}}>
                                          <b>{data.hospital.name}<br/>{data.hospital.name_si}
                                          <div style={{backgroundColor: "#5c6bc0", color:"white", marginTop: "1%"}}>
                                              &nbsp; <font size="4">Treatment Local: {data.treatment_local}</font>
                                          </div>
                                          <div style={{backgroundColor: "#039be5", color:"white" , marginTop: "1%"}}>
                                              &nbsp; <font size="4">Treatment Foreign: {data.treatment_foreign}</font>
                                          </div>
                                          <div style={{backgroundColor: "#5c6bc0", color:"white", marginTop: "1%"}}>
                                              &nbsp; <font size="4">Cumulative Local: {data.cumulative_local}</font>
                                          </div>
                                          <div style={{backgroundColor: "#039be5", color:"white", marginTop: "1%"}}>
                                              &nbsp; <font size="4">Cumulative Foreign: {data.cumulative_foreign}</font>
                                          </div>
                                          </b>
                                                    Last Update: {data.created_at}
                                      </div>
                                      
                                  </div>
                              </div>
                          </div>
                      </div>

                      

                      

))}

                  </div>

            </div>
        )
    }
}

export default Hospital
