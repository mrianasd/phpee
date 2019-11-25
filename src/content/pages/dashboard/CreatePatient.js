import React from 'react';

class CreatePatient extends React.Component {
    constructor(props){
        super(props);
        this.state={
    
        }
    }
    
  
    handleSubmit=()=>{
        //PUT TO DB
        console.log('submit');
        //on submit refresh dashboard page
    }

    render() {
        return (
            <div class="container register">
                <form class="row register-form" onSubmit={this.handleSubmit}>
                 <h3 class="register-heading">{this.props.title}</h3> 
                 <hr></hr>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="First Name *"  />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Last Name *"  />
                        </div>
                        <div class="form-group">
                            <input type="number" class="form-control" placeholder="Your Age *"  />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Your Email *"  />
                        </div>
                        <div class="form-group">
                            <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Your Phone *"  />
                        </div>
                        <div class="form-group">
                            <div class="maxl">
                                <label class="radio inline"> 
                                    <input type="radio" name="gender" value="male" checked/>
                                    <span> Male </span> 
                                </label>
                                <label class="radio inline"> 
                                    <input type="radio" name="gender" value="female"/>
                                    <span>Female </span> 
                                </label>
                            </div>
                        </div>
                        <input type="submit" class="btnRegister"  value="Create"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreatePatient;
