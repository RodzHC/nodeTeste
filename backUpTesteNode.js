var http = require ("http");

http.createServer(function(request, response){
	response.end("<html><body><h1>Teste</h1></body></html>");
}).listen(3000, "localhost");

console.log("servidor está rodando");


