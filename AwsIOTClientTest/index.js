const yargs = require('yargs');
var awsIot = require("aws-iot-device-sdk")


const argv = yargs.scriptName("lambda-mqtt-publisher").argv;

const topic = argv.topic;
const message = argv.message;

var device = awsIot.device({
    keyPath: './certs/private.pem.key',
    certPath: './certs/device.pem.crt',
    caPath: './certs/AmazonRootCA1.pem',
    clientId: 'sdk-nodejs-',
    host: 'abs5zb35f9o6-ats.iot.us-east-2.amazonaws.com'
})

if (topic && message) {   

    device.on('connect', function () {
        console.log('connect');
        //device.subscribe('topichola')
        device.publish(topic, JSON.stringify({ test_data: message }));
        device.end();
    });

    // device.on('message', function (topic, payload) {
    //     console.log('message', topic, payload.toString())
    // })
} else if (!topic) {
    console.log("Topic arg cannot be empty")
} else {
    console.log("Message arg cannot be empty")
}


