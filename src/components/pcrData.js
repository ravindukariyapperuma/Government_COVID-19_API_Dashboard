import React, { Component } from 'react'
import axios from 'axios'
import './card.css';

export class pcrData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data: [],
        }
    }

    componentDidMount(){
        axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
        .then(response=>{
          console.log(response.data.data.daily_pcr_testing_data);

            this.setState({
                
                data :  response.data.data.daily_pcr_testing_data.map(data=>data),
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
                        <h1> <i class="fa fa-flask fa-md"></i> Sri Lankan PCR testing data</h1>
                    </div>
                </div>
                </div>


                <div className="row" style={{marginTop: "0%", marginLeft: "1%", marginRight: "1%"}}>
                {this.state.data.map(data => (
                      
                      <div className="col-md-3">
                          <div className="card1">
                              <div style={{marginTop: "3%", marginBottom: "2%", marginLeft: "%"}}>
                                  <div className="row">
                                  
                                      
                                      <div className="col" style={{textAlign: "center"}}>
                                          <b>Date: {data.date}
                                          <div style={{backgroundColor: "#0099CC", color:"white", marginTop: "1%"}}>
                                              &nbsp; <font size="4">Count: {data.count}</font>
                                          </div>
                                          
                                          </b>
                                            
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

export default pcrData
