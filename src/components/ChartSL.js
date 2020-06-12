import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from 'axios'

class ChartsPage extends React.Component {
  state = {
    dataLine: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Count",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 255,255, .3)",
          borderColor: "rgb(205, 255, 255)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(255, 255,255 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(255, 255, 255)",
          pointHoverBorderColor: "rgba(255, 255, 255,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }
  };

  componentDidMount(){
    axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
    .then(response=>{
      console.log(response.data);
        this.setState({
            // dataLine.labels: 
     })
     console.log('new',this.state.newCases);
    })
  }

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Daily PCR Testing Data</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;