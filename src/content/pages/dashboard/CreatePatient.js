import React from 'react';
import * as AWS from 'aws-sdk'
import credentials from '../../config/aws-credentials'
AWS.config.update({
    region: 'us-east-1',
    endpoint: 'dynamodb.us-east-1.amazonaws.com',
    accessKeyId: credentials.accessKey,
    secretAccessKey: credentials.secretKey
  });

class CreatePatient extends React.Component {
    constructor(props){
        super(props);
        this.state={
    
        }
    }
    dynamodb = new AWS.DynamoDB();
    documentClient = new AWS.DynamoDB.DocumentClient();

    handleSubmit=()=>{
     
       var firstName = document.getElementById("firstname").value;
       var lastName = document.getElementById("lastname").value;
       
       var age = document.getElementById("age").value;
       var cellphone = document.getElementById("phone").value;
       var weight = document.getElementById("weight").value;
       var email = document.getElementById("email").value;
       var female = document.getElementById("gender-f").value;
       var male = document.getElementById("gender-m").value;
       var gender = document.getElementById("gender-f").checked===true? female: male;
       var id= this.props.size+1;
       var name=firstName+' '+lastName;
    
       
       console.log(firstName,' ',lastName,' ',weight,' ',email,' ',gender, ' ', );
       //PUT TO DB 
       var params = {
        Item: {
          patientId: id,
          name: name,
          age:  age,
          cellphone: cellphone,
          weight:weight,
          email:email,
          gender:gender
        },
        ReturnConsumedCapacity: "TOTAL",
        TableName: 'IoT-Patient',
      };
      
      this.documentClient.put(params, function(err, data) {
        if (err) {
          console.log(err);
        }
        else {
          console.log(data);
        }
      });
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
                            <input type="text" class="form-control" id="firstname" required={true} placeholder="First Name *"  />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="lastname" required={true} placeholder="Last Name *"  />
                        </div>
                        <div class="form-group">
                            <input type="number" class="form-control" id="age" required={true} placeholder="Your Age *"  />
                        </div>
                        <div class="form-group">
                            <div class="maxl" >
                                <label class="radio inline"> 
                                    <input type="radio" id="gender-m" name="gender" value="male" checked/>
                                    <span> Male </span> 
                                </label>
                                <label class="radio inline"> 
                                    <input type="radio" id="gender-f" name="gender" value="female"/>
                                    <span>Female </span> 
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="email" class="form-control" id="email" required={true} placeholder="Your Email *"  />
                        </div>
                        <div class="form-group">
                            <input type="text" minlength="10" maxlength="10" id="phone" required={true} name="txtEmpPhone" class="form-control" placeholder="Your Phone *"  />
                        </div>
                        <div class="form-group">
                            <input type="number" id="weight"  class="form-control" required={true} placeholder="Your Weight (kg) *"  />
                        </div>
                        <input type="submit" class="btnRegister"  value="Create"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreatePatient;
