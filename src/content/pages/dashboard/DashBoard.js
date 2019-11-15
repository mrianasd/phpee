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
                <h3>Home</h3>
                <p>Here youll se the graphics</p>
                <ListData />
            </div>
        );
    }
}

export default DashBoard;
