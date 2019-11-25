import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

const dataPie= {
    labels: ["Transparent", "Light Yellow", "Dark Yellow", "Honey", "Coke", "Pink/Red", "Orange", "Green/Blue"],
    datasets: [
      {
        data: [5, 10, 10, 2, 1,1,3,1],
        backgroundColor: [
          "#FFFFFF",//255,255,255
          "#FAFAA8",//rgb(250, "250, 168)
          "#FFEA46",//rgb(255, 234, 70)
          "#C3C338",//rgb(195, 195, 56)
          "#4B400A",//rgb(75, 64, 10)
          "#FF144E",//rgb(255, 20, 78)
          "#EF7C17",//rgb(239, 124, 23)
          "#17EF8A",//rgb(23, 239, 138)
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
          colorData:[]
        }
    }
    componentDidMount(){
      let colorData=[];
      let backgroundColor=[];

      this.props.patient[0].colorData.map(c=>{colorData.push('rgb('+c.red+','+c.green+','+c.blue+')')});
      colorData.forEach(color=>{
        if(!backgroundColor.includes(color))
          backgroundColor.push(color);
      })
      //checar si el color entra en el parametro y pushear +1 a la posicion del color
    }
    
    dataLine={
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
          pointBorderColor: "rgb(205, 130,1 58,.5)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 5,
          data: this.props.patient[0].phData
        }
      ]
}

volDataLine={
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  scales: { yAxes: [ { ticks: { max: 14, min: 0 } } ] },
  datasets: [{
    label: "Volumen",
    fill: true,
    lineTension: 0.3,
    backgroundColor: "rgba(184, 185, 210, .3)",
    borderColor: "rgb(35, 26, 136)",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderColor: "rgb(35, 26, 136,.5)",
    pointBackgroundColor: "rgb(255, 255, 255)",
    pointBorderWidth: 5,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgb(0, 0, 0)",
    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 5,
    data: this.props.patient[0].volData
  }]
}

//PONER EN COMPONENTDIDUPDATE LOS DATOS DE LA GRAFICA DE COLORES 
 
    render() {
      console.log('color', this.state.cl);
        return (
            <div class="container" >
                <h2 class="text-center" id="title">{this.props.title}
                <small class="small"> {"("+this.props.patient[0].edad+ "years)"}</small> </h2>
                    <ul class="list-inline small text-center">
                    <li class="list-inline-item">{this.props.patient[0].cellphone}</li>
                    <li class="list-inline-item">|</li>
                    <li class="list-inline-item">{this.props.patient[0].email}</li>
                    </ul>
                <hr></hr>   
        <h3 className="mt-5">History</h3>
        <Line data={this.dataLine} options={{ responsive: true }} />
        <hr></hr>
        <h2 class="text-center" id="title">VOLUMEN </h2>
        <p class="text-center small">Volume history per {"day"}</p>
        <Line data={this.volDataLine} options={{ responsive: true }} />
        <hr></hr>
        <h2 class="text-center" id="title">COLOR </h2>
        <p class="text-center small">Color history per {"day"}</p>
        <Pie data={dataPie} options={{ responsive: true }} />
                </div>
        );
    }
}

export default PatientDetail;
