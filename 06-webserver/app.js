const http = require('http')
const PORT = 8080
http.createServer((request, response)=>{
    console.log(request);
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write('Hello World from server');
    response.end();
}).listen(PORT);

console.log('Listening at port ', PORT) // open in browser http://localhost:8080/