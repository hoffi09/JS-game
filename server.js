const http = require('http');
const fs = require('fs');
const port =  3000;

const server = http.createServer(function(req, res){
    fs.readFile('./src/index.html', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
    })
    res.end();
})

server.listen(port, function(error){
    if(error){
        console.log('Wrong', error)
    }else{
        console.log('Running');
    }
})