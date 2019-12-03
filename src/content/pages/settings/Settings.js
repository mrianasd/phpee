import React from 'react';
import LogIn from './LogIn';
import HomeContent from '../home/Home';

class Settings extends React.Component {

    logout(){
        console.log("logging out")
    
    }
    render() {
        return (
            
            <div id="Settings" className="tabcontent dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Settings  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <button class="dropdown-item" onClick={this.logout}>LogOut</button>
    
  </div>
</div>
        );
    }
}

export default Settings;
