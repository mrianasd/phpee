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
  dynamodb = new AWS.DynamoDB();
  docClient = new AWS.DynamoDB.DocumentClient();
  
  onRead = () => {
    let that = this;
    let params = {
        TableName: "IoT-DB"
    };
  
    this.docClient.scan(params, function(err, data) {
      if (err) {
          console.log(err);
      } else {
        console.log(data)
        //this will not be logged.
      //     that.setState({
      //         gridData: data
      // })
      }
    });
  };
  
  
}
