var http = require("http");

var PORT1 = 7000;

var PORT2 = 7500;

function handleRequestGood(request, response){
    response.end("You are a good listener. Here is the request url: " + request.url);
}

function handleRequestBad(request, response){
    response.end("You are a bad listener. Here is the request url: " + request.url);
}

var serverGood = http.createServer(handleRequestGood);
var serverBad = http.createServer(handleRequestBad);

serverGood.listen(PORT1, function(){
    console.log("Server listening on: http://localhost:%s", PORT1);
});

serverBad.listen(PORT2, function(){
    console.log("Server listening on: http://localhost:%s", PORT2);
});