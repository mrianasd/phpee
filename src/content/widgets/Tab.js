import React from 'react';
import {MdHome} from 'react-icons/md';
import { thisExpression } from '@babel/types';
import DashBoard from '../pages/dashboard/DashBoard';
import ListData from '../pages/dashboard/ListData';



class Tabs extends React.Component {
  constructor(props){
    super(props)
    this.state={ 
      logged:false
    }
    this.handleSignIn.bind(this);
  }

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

    handleSignIn(){
      console.log("login");

      let user= document.getElementById("inputEmail").value;
      let pswd= document.getElementById("inputPassword").value;
  
      console.log(user,pswd); 
      this.setState({logged:true});
  
    }
    logout(){
      console.log("logout");
      this.handleTabClick("Home")
      this.setState({logged:false});
      

    }

    render() {
        return (
          <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
             <div class="container">
              <a class="navbar-brand" href="#">PH
                <img src="https://svgsilh.com/svg/254088.svg" height="30" width="30" alt=""/>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" 
               aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              {this.state.logged? 
                <div class="collapse navbar-collapse tab" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    {this.renderTab("DashBoard")}
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"  onClick={()=>this.logout()}>LogOut</a>
                    </li>
                  </ul>
                </div>:null}
            </div>
          </nav>
          {this.state.logged? 
            <div >
            {/*   <h3 className="home">WELCOME DR!</h3>
            <p className="subtitle">Click on <strong>DashBoard</strong> to see your patients</p> */}
             {/* <img src="https://c0.piktochart.com/v2/uploads/81ecd723-4957-46d6-993e-ac6d6bdc0226/354c684dc50a364498a56ef5802ea94e5ca33213_original.png"></img> */}
             </div>:
            <div class="container">
              <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                  <div class="card card-signin my-5">
                    <div class="card-body">
                      <h5 class="card-title text-center">Sign In</h5>
                      <form class="form-signin">
                        <div class="form-label-group">
                          <label for="inputEmail">Email address</label>
                          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required defaultValue=""></input>
                        </div>
                        <div class="form-label-group">
                          <label for="inputPassword">Password</label>
                          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                        </div>
                        <br></br>
                        <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={()=>this.handleSignIn()}>Sign in</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }</div>
    
        );
    }
}

export default Tabs;