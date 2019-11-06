import React from 'react';
import PatientDetail from './PatientDetails';

class HomeContent extends React.Component {

  
    render() {
        return (
            <div id="Patients" className="tabcontent">
                <PatientDetail title="Patient Name"/>
            </div>
        );
    }
}

export default HomeContent;
