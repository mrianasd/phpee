import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

const dataLine={
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        scales: { yAxes: [ { ticks: { max: 14, min: 0 } } ] },
        datasets: [
          {
            label: "PH",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(225, 204,230, .3)",
            borderColor: "rgb(205, 130, 158)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(205, 130,1 58)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [5, 6, 8, 10, 11, 8, 7]
          }
        ]
}

const dataPie= {
    labels: ["Transparent", "Light Yellow", "Dark Yellow", "Honey", "Coke", "Pink/Red", "Orange", "Green/Blue"],
    datasets: [
      {
        data: [5, 10, 10, 2, 1,1,3,1],
        backgroundColor: [
          "#FFFFFF",
          "#FAFAA8",
          "#F2F21C",
          "#C3C338",
          "#4B400A",
          "#EF176D",
          "#EF7C17",
          "#17EF8A",
        ],
        hoverBackgroundColor: [
            "#FFFFFF",
            "#FAFAA8",
            "#F2F21C",
            "#C3C338",
            "#4B400A",
            "#EF176D",
            "EF7C17",
            "17EF8A"
        ]
      }
    ]
  }
class PatientDetail extends React.Component {
    constructor(props){
        super(props)
        this.state={ 
        }
    }
    
    render() {
        return (
            <div class="container" >
                <h2 class="text-center" id="title">{this.props.title}
                <small class="small"> (72 years)</small> </h2>
                    <ul class="list-inline small text-center">
                    <li class="list-inline-item">3310092882</li>
                    <li class="list-inline-item">|</li>
                    <li class="list-inline-item">testmail@hotmail.com</li>
                    </ul>
                <hr></hr>   
        <h3 className="mt-5">History</h3>
        <Line data={dataLine} options={{ responsive: true }} />
        <hr></hr>
        <h2 class="text-center" id="title">COLOR </h2>
        <p class="text-center small">Color history per {"day"}</p>
        <Pie data={dataPie} options={{ responsive: true }} />
                <div style={{height: "700px"}}></div>
                </div>
        );
    }
}

export default PatientDetail;
