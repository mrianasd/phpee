import React from 'react';
import LogIn from '../settings/LogIn';

class HomeContent extends React.Component {
    constructor(props){
        super(props)
        this.state={ 
          logged:false
        }
      }
  
    render() {
        return (
            <div id="Home" className="tabcontent">
            {this.state.logged?
                <div>Welcome!</div>:
                null}
            </div>
        );
    }
}

export default HomeContent;
