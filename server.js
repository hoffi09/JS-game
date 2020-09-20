const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer(function(req, res){
    // fs.readFile('./src/index.html', 'utf8', function (err,data) {
    //     if (err) {
    //       return console.log(err);
    //     }
    //     console.log(data);
    // })
    res.writeHead(200, {'Content-type':'text/html'})
    fs.readFile('./src/index.html', function(error, data){
        if(error){
            res.writeHead(404);
        }else{
            res.write(data);
        }
        res.end();
    })
})

server.listen(port, function(error){
    if(error){
        console.log('Wrong', error)
    }else{
        console.log('Running');
    }
})