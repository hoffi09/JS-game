const http = require('http');
const fs = require('fs');
const port =  process.env.PORT || 3000;

const server = http.createServer(function(req, res){
    res.write('yo');
    //fs.readFile('index.html'); <-jebane gówno
    res.end();
})

server.listen(port, function(error){
    if(error){
        console.log('wrong', error)
    }else{
        console.log('Running');
    }
})