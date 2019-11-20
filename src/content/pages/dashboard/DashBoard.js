import React from 'react';
import ListData from './ListData'
class DashBoard extends React.Component {
    render() {
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
