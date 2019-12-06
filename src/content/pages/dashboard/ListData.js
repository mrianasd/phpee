import React from 'react';
import {GoGraph} from 'react-icons/go';
import PatientDetail from './PatientDetails'

import * as AWS from 'aws-sdk'
import credentials from '../../config/aws-credentials'
import Popup from '../../widgets/PopUp';
import CreatePatient from './CreatePatient';

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'dynamodb.us-east-1.amazonaws.com',
  accessKeyId: credentials.accessKey,
  secretAccessKey: credentials.secretKey
});

class ListData extends React.Component {
  constructor(props){
    super(props)
    this.state={ 
      patients:[],
      sensors:[],
      patientsData:[],
      patientHistory:[]
    }
  }

  dynamodb = new AWS.DynamoDB();
  docClient = new AWS.DynamoDB.DocumentClient();

componentDidMount(){
/*   var newpatients=[{nombre:"Mariana Salas", edad:70, email:"mariana.salas@gmail.com", cellphone:"3312225876", ph:5,
   color:"#ffff00", volumen:10},
  {nombre:"Miguel Nuño", edad:70,  email:"mangel.nuno@gmail.com", cellphone:"3336678990",ph:5.7, 
  color:"#ecf5cc", volumen:10} ]; */

  //AWS
  let paramsSensors = {
    TableName: "IoT-DB"};
  let paramsPatients = {
    TableName: "IoT-Patient"};

this.docClient.scan(paramsSensors, (err, data) =>{
  if (err) {
      console.log(err);
  } else {
    this.setState({sensors:data.Items});
  }
});
this.docClient.scan(paramsPatients, (err, data) =>{
  if (err) {
      console.log(err);
  } else {
    this.setState({patientsData:data.Items});
  }
});

}

flag=[];
componentDidUpdate(){
  if(this.state.patientsData.length!=0 && this.flag[0]!==this.state.patientsData[0]){
    this.flag[0]=this.state.patientsData[0];

    if(this.state.patients.length==0){
      let patients = [];
      let history =[];
      let patObject ={};
      let historyObject={};
      let phData=[];
      let colorData=[];
      let volData=[];
      let datesData=[];
      let today = new Date();
      let day =""+ 0+today.getDate();
      day+=1;
      let month=today.getMonth()+1;
      let todayDateString=today.getFullYear()+"-"+month+"-"+day;
      let todayPatient=[];
   
      //loops through patients array
      for(let i=0; i<this.state.patientsData.length; i++){
        historyObject={};
        phData=[];
        volData=[];
        colorData=[];
        datesData=[];
        //for each patient we loop through sensors data array
        for(let j=0; j<this.state.sensors.length; j++){
          //if the patient has a sensor data enters here to save the data
          if(this.state.sensors[j].patientId===this.state.patientsData[i].patientId){
            //saves the data history of the patient 
            phData.push(this.state.sensors[j].ph);
            volData.push(this.state.sensors[j].vol);
            colorData.push(this.state.sensors[j].color);
            datesData.push(this.state.sensors[j].timeStamp);
            
            //Creates the patient object with data from Today
            //let timeStamp = new Date(this.state.sensors[j].timeStamp);

            if(this.state.sensors[j].timeStamp.slice(0,10) ===  "2019-12-04"){ 
              
              patObject={ patientId: this.state.patientsData[i].patientId,
                nombre: this.state.patientsData[i].name, 
                cellphone: this.state.patientsData[i].cellphone,
                edad: this.state.patientsData[i].age,
                ph:this.state.sensors[j].ph,
                vol:this.state.sensors[j].vol,
                color:this.state.sensors[j].color,
                sampleId: this.state.sensors[j].sampleId}
                patients.push(patObject);
                todayPatient.push(this.state.patientsData[i].name);
              }
              //si no tienen datos de hoy pero si son pacientes existentes con datos e historial
            
              }
              if(j===this.state.sensors.length-1){
                historyObject={
                  patientId: this.state.patientsData[i].patientId,
                  nombre: this.state.patientsData[i].name, 
                  cellphone: this.state.patientsData[i].cellphone,
                  edad: this.state.patientsData[i].age,
                  phData:phData,
                  volData: volData,
                  colorData: colorData,
                  fechas: datesData
                }
                history.push(historyObject);
                if(!(todayPatient.includes(this.state.patientsData[i].name)) &&phData.length>0){
                      patObject={ patientId: this.state.patientsData[i].patientId,
                        nombre: this.state.patientsData[i].name, 
                        cellphone: this.state.patientsData[i].cellphone,
                        edad: this.state.patientsData[i].age,
                        ph:null,
                        vol:null,
                        color:null,
                        sampleId: null}
                        patients.push(patObject);
                    }  
              }             
            }
            //si no tienen datos
            if(phData.length===0){
                  let newObject={
                    nombre: this.state.patientsData[i].name, 
                    cellphone: this.state.patientsData[i].cellphone,
                    edad: this.state.patientsData[i].age,
                    ph:null,
                    vol:null,
                    color:null,
                    sampleId: null
                  }
                  patients.push(newObject);
              
            }
          }
      this.setState({patients:patients})
      this.setState({patientHistory:history})
    }
  }
}

showGraphs(idx){
  if(document.getElementById("patient-graphs"+idx).hidden)
    document.getElementById("patient-graphs"+idx).hidden=false;
  else
  document.getElementById("patient-graphs"+idx).hidden=true;
}

  render() {
    let color="255, 255, 255";
    return (
      <div  id="DashBoard" className="tabcontent">
        <h1>Patients</h1>
        <Popup title="Create new Patient" content={<CreatePatient title="Create new Patient" size={this.state.patientsData.length}/>}/>
        <section class="blok">
        <div class="blok-body">
        {this.state.patients.map((patient, idx) => (
        <div class="row">
          <ul class="nav tab-menu nav-pills col-sm-4 nav-stacked pr15 sticky-top">
          <div class="accordion" id="accordionEx7" role="tablist" aria-multiselectable="true">
                        <div class="card" style={{width: "23rem"}}>
                          <div class="card-header" role="tab" id={"heading"+idx}>
                            <a data-toggle="collapse" data-parent="#accordionEx7" href={"#collapse"+idx} 
                              aria-controls={"collapse"+idx} className="cardName">
                              <h5>
                                {patient.nombre}
                              </h5>
                            </a>
                            <button className="card-icon-btn" id={"graph"} onClick={()=>this.showGraphs(idx)}><GoGraph/></button>
                          </div>
                          <div id={"collapse"+idx} class="collapse" role="tabpanel" aria-labelledby={"heading"+idx}
                            data-parent="#accordionEx7">
                            <div class="card-body mb-1 rgba-grey-light white-text">
                            {patient.ph==null && patient.color==null && patient.vol ==null? <p>No data available for today</p>:
                            <div className="small">
                            <p hidden={true}>{ color=patient.color.split(", ")}</p>
                              <span className="card-info-title">PH: </span>{patient.ph}
                              <span className="card-info-title">Color: </span><button class="color-info" 
                                    style={{backgroundColor: "rgb("+color[0]+"," +color[1]+","+ color[2]+")"}}>
                                  </button>
                              <span className="card-info-title">Volumen: </span>{patient.vol +' ml'} 
                              </div> }
                            </div>
                          </div>
                        </div>
                      
                </div>  </ul> 
          <div class="tab-content col-sm-8" >
            <div  hidden={true} id={"patient-graphs"+idx}> 
            { this.state.patientHistory.filter(p=>p.patientId ===patient.patientId).length===0 ? <p className="card-info-title">No history available</p>:
            <PatientDetail title={patient.nombre + " Historial"}  patient={this.state.patientHistory.filter(p=>p.patientId ===patient.patientId)}/>
          }
          </div>
          </div>
        </div>
          ))}
        </div>
        </section>
      </div>
    );
  }
}

export default ListData;