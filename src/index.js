import http from 'http';

const port = 8080;
http.createServer((req, res) => {
    res.end('hello world!');
}).listen(port, () => {
    console.log('Server listen port:', port);
});

