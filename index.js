const http = require('http');
const express = require('express');
const app = express();
const port = 5000;
const eport = 2000;

http.createServer((request, response) => {
    response.write('This is http server');
    response.end();
}).listen(port, () =>
    console.log(`Http server started at http://localhost:${port}`)
);

app.get('/', (request, response) => {
    response.send('This is express server');
});
app.listen(eport, () =>
    console.log(`Express server started at http://localhost:${eport}`)
);
