var thrift = require('thrift');
var helloSvc = require('../../gen-nodejs/helloService');
import peopleService from '../../gen-nodejs/PeopleService';

//ServiceHandler: Implement the hello service 
import helloServiceHandler from './helloServiceHandler';
import peopleServiceHandler from './peopleServiceHandler';

//ServiceOptions: The I/O stack for the service
const defaultOptions = {
    protocol: thrift.TJSONProtocol,
    transport: thrift.TBufferedTransport    
};

let helloSvcOpt = {
    handler: helloServiceHandler,
    processor: helloSvc
};

let peopleServiceOptions = {
    handler: peopleServiceHandler,
    processor: peopleService
};

// function clone (obj) {
//     return extend({}, obj);
// }

function extend (target, obj) {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            target[i] = obj[i];
        }
    } 
}

extend(helloSvcOpt, defaultOptions);
extend(peopleServiceOptions, defaultOptions);

//ServerOptions: Define server features
var serverOpt = {
    services: {
        "/hello": helloSvcOpt,
        "/people": peopleServiceOptions
    }
}


//Create and start the web server 
var port = 9090;
thrift.createWebServer(serverOpt).listen(port);
console.log("Http/Thrift Server running on port: " + port);

//////////////////////////////////////////////////
const processor = new thrift.MultiplexedProcessor();
processor.registerProcessor('hello', new helloSvc.Processor(helloServiceHandler));
processor.registerProcessor('people', new peopleService.Processor(peopleServiceHandler));

const socketPort = 9091;
thrift.createMultiplexServer(processor)
// thrift.createServer(helloSvc, helloServiceHandler)
    .listen(socketPort, () => {
        console.log('thrift server running on port:', socketPort);
    });
