var awsIot = require("aws-iot-device-sdk")

var device = awsIot.device({
    keyPath: './certs/private.pem.key',
    certPath: './certs/device.pem.crt',
    caPath: './certs/AmazonRootCA1.pem',
    clientId: 'sdk-nodejs-',
    host: 'abs5zb35f9o6-ats.iot.us-east-2.amazonaws.com'
})

device
  .on('connect', function() {
    console.log('connect');
    device.subscribe('topic_in');
    device.publish('topic_in', JSON.stringify({ test_data: 1}));
  });

device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });


