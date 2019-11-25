import * as AWS from 'aws-sdk'
import credentials from './aws-credentials'
import { Config } from 'aws-sdk';

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'dynamodb.us-east-1.amazonaws.com',
  accessKeyId: credentials.accessKey,
  secretAccessKey: credentials.secretKey
});

export default class AWSConfig{
  constructor(props){
    this.state={
      gridData:[]
    }
  }

  dynamodb = new AWS.DynamoDB();
  docClient = new AWS.DynamoDB.DocumentClient();
  
  onRead(){
    let params = {
        TableName: "IoT-DB"
    };
  
    this.docClient.scan(params, function(err, data) {
      if (err) {
          console.log(err);
      } else {
        console.log(data)
        return data;
      }
    });
  };
  
  
}
