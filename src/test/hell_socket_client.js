import thrift from 'thrift';
import helloService from '../../gen-nodejs/helloService';
import peopleService from '../../gen-nodejs/PeopleService';
// import ttypes from '../../gen-nodejs/hello_types';

const connection = thrift.createConnection('localhost', 9091);

connection.on('error', (error) => {
    console.log('connection error: ', error);
});

// const client = thrift.createClient(helloService, connection);
// client.foo((error, result) => {
//     console.log('foo', result);
//     // connection.end();
//     client.echo('hi', (error, result) => {
//         console.log(error, result);
//     });
// });

const multiplexer = new thrift.Multiplexer();

const client = multiplexer.createClient('hello', helloService, connection);

client.foo((error, result) => {
	console.log('mp foo', result);
})

const peopleClient = multiplexer.createClient('people', peopleService, connection);
peopleClient.ping((error, result) => {
	console.log('mp ping:', result);
})



