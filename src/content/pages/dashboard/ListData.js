import React from 'react';
import {GoGraph} from 'react-icons/go';
import PatientDetail from '../home/PatientDetails';

class ListData extends React.Component {
  constructor(props){
    super(props)
    this.state={ 
      patients:[]
    }
  }

componentDidMount(){
  var newpatients=[{nombre:"Mariana Salas", edad:70, email:"mariana.salas@gmail.com", cellphone:"3312225876", ph:5,
   color:"#ffff00", volumen:10},
  {nombre:"Miguel Nuño", edad:70,  email:"mangel.nuno@gmail.com", cellphone:"3336678990",ph:5.7, 
  color:"#ecf5cc", volumen:10} ];
  this.setState({patients: newpatients});
}

showGraphs(idx){
  if(document.getElementById("patient-graphs"+idx).hidden)
    document.getElementById("patient-graphs"+idx).hidden=false;
  else
  document.getElementById("patient-graphs"+idx).hidden=true;
}

  render() {
    return (
      <div>
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
                    <div className="small">
                       <span className="card-info-title">PH: </span>{patient.ph}
                      <span className="card-info-title">Color: </span><button class="color-info" style={{background:patient.color}}></button>
                      <span className="card-info-title">Volumen: </span>{patient.ph} 
                      </div>  
                    </div>
                  </div>
                </div>
              
        </div>  </ul> 
  <div class="tab-content col-sm-8" >
    <div  hidden={true} id={"patient-graphs"+idx}> 
     <PatientDetail title={patient.nombre + " Historial"}  patient={patient}/>
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