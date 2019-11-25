import React from 'react';
import {MdHome} from 'react-icons/md';
import { thisExpression } from '@babel/types';

class TabLink extends React.Component {
    render() {
        return (
            <button 
                className="tablinks" 
                onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
            
        );
    }
}

class Tabs extends React.Component {

    handleTabClick(id) {
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(id).style.display = "block";
        for (i = 0; i < tablinks.length; i++) {
            if (tablinks[i].textContent === id) {
                tablinks[i].className += " active";
                break;
            }             
        }
    }

    renderTab(i) {
        return  <a class="nav-link" href="#"   onClick={() => this.handleTabClick(i)} >{i}
      </a> 
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
  <div class="container">
    <a class="navbar-brand" href="#">PH
          <img src="https://svgsilh.com/svg/254088.svg" height="30" width="30" alt=""/>
        </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" 
    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse tab" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
        {this.renderTab("DashBoard")}
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
        </li>
        <li class="nav-item">
        {this.renderTab("Settings")}
        </li>
      </ul>
    </div>
  </div>
</nav>
    
        );
    }
}

export default Tabs;