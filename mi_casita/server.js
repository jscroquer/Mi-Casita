var http = require("http");
var url = require("url");

function start(route,handle){
	function onRequest(request,response){
        var dataPosteada = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Peticion para "+pathname+" recibida.");
        
        request.setEncoding("utf8");
        request.addListener("data", function(trozoPosteado) {
            dataPosteada += trozoPosteado;
            console.log("Recibido trozo POST '" + trozoPosteado + "'.");
        });
        request.addListener("end", function() {
            route(handle, pathname, response, dataPosteada);
        });


        //route(handle,pathname,response);
	}

	http.createServer(onRequest).listen(4000);
	console.log("Servidor Iniciado");
}

exports.start = start;
 
