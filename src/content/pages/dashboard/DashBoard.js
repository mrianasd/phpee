import React from 'react';
import ListData from './ListData'
//import AWSInstance from '../../config/awsConfig' 
import AWSConfig from '../../config/awsConfig';
class DashBoard extends React.Component {
    render() {
        console.log("HolaMundo")
        let aws = new AWSConfig()
        aws.onRead()
        return (
            <div id="DashBoard" className="tabcontent">
                <h3>Pacientes</h3>
                <br></br>
                <ListData />
            </div>
        );
    }
}

export default DashBoard;
