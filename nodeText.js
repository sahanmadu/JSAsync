const http = require('http');

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 8070;

const server =http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("hello world"); 
   
});

server.listen(PORT,HOSTNAME, ()=>{
    console.log(`Server is running at http://${HOSTNAME} : ${PORT}`);
});


// create a http server without using express framework