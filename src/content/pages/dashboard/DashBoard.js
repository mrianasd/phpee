import React from 'react';
import ListData from './ListData'
//import AWSInstance from '../../config/awsConfig' 
import AWSConfig from '../../config/awsConfig';
class DashBoard extends React.Component {
    render() {
        let aws = new AWSConfig()
        aws.onRead();

        return (
            <div >  
                <ListData />
            </div>
        );
    }
}

export default DashBoard;
