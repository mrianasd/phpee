import React from 'react';
import ListData from './ListData'
class DashBoard extends React.Component {
    render() {
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
