import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

class PatientDetail extends React.Component {
    constructor(props){
        super(props)
        this.state={ 
          dates:[],
          colors:[]
        }
    }
    componentDidMount(){
  
      let fechas=[];
      this.props.patient[0].fechas.map(f=> {
        fechas.push(new Date(""+f+"").toDateString());
      });
    
      this.processColors();
      this.setState({dates:fechas})
    }

    processColors(){
        let colorData=[];
        let transparent=0;
        let lightYellow=0;
        let darkYellow=0;
        let honey=0;
        let coke=0;
        let pinkRed=0;
        let orange=0;
        let greenBlue=0;
        
        this.props.patient[0].colorData.map(color=>{
          let colors=color.split(", ");
          let red=colors[0];
          let green =colors[1];
          let blue =colors[2]; 

          if(red==255 && green ==255 && blue==255){
            transparent++;
          }else if((red >=248 && red <=255)&&(green >=248 && green <=255) && (blue >=129 && blue <=229)){
            lightYellow++;
          }
          else if((red >=235 && red <=255)&&(green >=145 && green <=255) && (blue >=0 && blue <=130)){
            darkYellow++;
          }
          else if((red >=195 && red <=234)&&(green>=165 && green <=200) && (blue>=0  && blue <=89)){
            honey++;
          }
          else if((red >=70 && red<=120)&& (green>=0&&green<=75) && (blue>=0 && blue<=50)){
            coke++;
          }
          else if((red>=225&&red<=255)&& (green>=90 &&green<=160) && (blue>=0&&blue<=0)){
            orange++;
          }
          else if((red >=160&&red<=255)&& (green>=0&&green<=80) && (blue>=0&&blue<=80)){
            pinkRed++;
          }
          else if((red >=0&&red<=60)&& (green>=100&& green<=255) && (blue>=100&&blue<=255)){
            greenBlue++;
          }
        });
        colorData.push(transparent);
        colorData.push(lightYellow);
        colorData.push(darkYellow);
        colorData.push(honey);
        colorData.push(coke);
        colorData.push(pinkRed);
        colorData.push(orange);
        colorData.push(greenBlue);
        console.log("*****++++",colorData)
        this.setState({colors:colorData})
    }

    dataLine={};
    volDataLine={};
    dataPie={};
    flag=[];
    componentDidUpdate(){
      if(this.state.dates.length!=0 && this.state.colors.length!=0 &&this.flag[0]!==this.state.dates[0]){
        this.flag[0]=this.state.dates[0];

    let dates= this.state.dates.sort();
    let colors=this.state.colors;

    this.dataLine={
      labels: dates,
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

  this.volDataLine={
  labels: dates,
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
this.dataPie= {
  labels: ["Transparent", "Light Yellow", "Dark Yellow", "Honey", "Coke", "Pink/Red", "Orange", "Green/Blue"],
  datasets: [
    {
      data: colors,
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
this.setState({dates:dates})
this.setState({colors:colors});
}
}
//PONER EN COMPONENTDIDUPDATE LOS DATOS DE LA GRAFICA DE COLORES 
    render() {
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
        <Pie data={this.dataPie} options={{ responsive: true }} />
                </div>
        );
    }
}

export default PatientDetail;
