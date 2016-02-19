var thrift = require('thrift');
var helloSvc = require('../../gen-nodejs/helloService');
var ttypes = require('../../gen-nodejs/hello_types');
var options = {
    transport: thrift.TBufferedTransport,
    protocol: thrift.TJSONProtocol,
    path: "/hello",
    headers: {
        Connection: 'keep-alive'
    },
    https: false
};

var connection = thrift.createHttpConnection("localhost", 9090, options);
var client = thrift.createHttpClient(helloSvc, connection);

connection.on("error", function(err) {
    console.log("Error: " + err);
});

client.foo(function(error, result) {
    console.log("Msg from server: " + result);

});

// setTimeout(() => {
//     client.echo('hi', function(error, result) {
//         console.log(error, result);
//     });
// }, 1000);


// client.saveUser(new ttypes.User({
//     name: 'alan',
//     gender: 1,
//     uid: 2,
//     extra: 'hhaa',
//     profile: new ttypes.Profile({
//         card: 1,
//         partner: 2
//     })
// }), function(error, result) {
//     console.log('save done', result);
// })

// client.loadUser(1, function(error, result) {
//  console.log('loadUser done', error, result);
// });

// client.loadUsers((error, result) => {
//     console.log(error, result);
// });

client.testSet((error, result) => {
    console.log(error, result);
});

//////////////////////////////////////////////////////////////////////
// People

import peopleService from '../../gen-nodejs/PeopleService';

var options = {
    transport: thrift.TBufferedTransport,
    protocol: thrift.TJSONProtocol,
    path: "/people",
    headers: {
        Connection: 'keep-alive'
    },
    https: false
};

var connection = thrift.createHttpConnection("localhost", 9090, options);
var client = thrift.createHttpClient(peopleService, connection);

connection.on("error", function(err) {
    console.log("Error: " + err);
});

client.ping(function(error, result) {
    console.log("ping from server: " + result);

});

