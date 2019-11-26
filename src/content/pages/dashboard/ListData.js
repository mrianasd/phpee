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
    console.log('%%%%',data.Items)
    this.setState({sensors:data.Items});
  }
});
this.docClient.scan(paramsPatients, (err, data) =>{
  if (err) {
      console.log(err);
  } else {
    console.log('%%%%',data.Items)
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

      for(let i=0; i<this.state.patientsData.length; i++){
        historyObject={};
        phData=[];
        volData=[];
        colorData=[];
        for(let j=0; j<this.state.sensors.length; j++){
          if(this.state.sensors[j].patientId===this.state.patientsData[i].patientId){
            //Creates the patient object with data from Today
            
            //saves the data history of the patient 
            phData.push(this.state.sensors[j].ph);
            volData.push(this.state.sensors[j].vol);
            colorData.push(this.state.sensors[j].color);
            
            if(this.state.sensors[j].sampleId===2 ||this.state.sensors[j].sampleId===7 ){ //delete later just adjust to get TODAYS DATA
              patObject={ patientId: this.state.patientsData[i].patientId,
                nombre: this.state.patientsData[i].name, 
                cellphone: this.state.patientsData[i].cellphone,
                edad: this.state.patientsData[i].age,
                ph:this.state.sensors[j].ph,
                vol:this.state.sensors[j].vol,
                color:this.state.sensors[j].color,
                sampleId: this.state.sensors[j].sampleId}
                patients.push(patObject);} //add condition else if theres no data from that day put "No available data"
              }
              if(j===this.state.sensors.length-1){
                historyObject={
                  patientId: this.state.patientsData[i].patientId,
                  nombre: this.state.patientsData[i].name, 
                  cellphone: this.state.patientsData[i].cellphone,
                  edad: this.state.patientsData[i].age,
                  phData:phData,
                  volData: volData,
                  colorData: colorData
                }
                history.push(historyObject);
              }             
            }
            if(phData.length==0){
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
                            {patient.ph==null && patient.color==null && patient.vol ==null? <p>No data available</p>:
                            <div className="small">
                              <span className="card-info-title">PH: </span>{patient.ph}
                              <span className="card-info-title">Color: </span><button class="color-info" 
                                    style={{backgroundColor: "rgb(this.state.patients.color.red, this.state.patients.color.green, this.state.patients.blue)"}}>
                                  </button>
                              <span className="card-info-title">Volumen: </span>{patient.vol +' ml'} 
                              </div> }
                            </div>
                          </div>
                        </div>
                      
                </div>  </ul> 
          <div class="tab-content col-sm-8" >
            <div  hidden={true} id={"patient-graphs"+idx}> 
            {patient.ph==null && patient.color==null && patient.vol ==null? <p className="card-info-title">No history available</p>:
            <PatientDetail title={patient.nombre + " Historial"}  patient={this.state.patientHistory.filter(p=>p.patientId ===patient.patientId)}/>
          }
          </div>
          </div>
        </div>
          ))}
        </div>
        </section>
      </div>

        /* <div id="ListData" className="List">
        <Card style={{ width: '20rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Mariana Salas
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body >
                      <div className="small">
                       <span className="card-info-title">PH: </span>{patient.ph}
                      <span className="card-info-title">Color: </span><button class="color-info" style={{background:patient.color}}></button>
                      <span className="card-info-title">Volumen: </span>{patient.ph} 
                      </div>  
                      </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div> */
    );
  }
}

export default ListData;