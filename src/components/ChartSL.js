



import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from 'axios'



class ChartsPage extends React.Component {
  state = {
    newCases: "",
             newDeaths: "",
             hospitalized: "",
             recoveries: "",
             totalCases: "",
             totalDeaths: "",
             activeCases: "",
             lastUpdate: "",
    dataPie: {
      labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
      datasets: [
        {
          data: [10, 50, 100, 40, 400],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
            "#AC64AD"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#DA92DB"
          ]
        }
      ]
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

  render() {
    return (
      <div>

<div style={{marginTop: "1%"}}>
                <div className="" style={{marginLeft: "1%", marginRight: "1%"}}>
                    <div className="border border-primary" style={{backgroundColor: "#223561", opacity: "1",marginBottom: "1%",marginTop: "0%", color: "#ffffff",textAlign: "center"}}>
                        <h1> <i class="fa fa-file fa-md"></i> Sri Lanka data distribution</h1>
                    </div>
                </div>
                </div>

      <MDBContainer>
        <h3 className="mt-5">Pie chart</h3>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
      </div>
    );
  }
}

export default ChartsPage;