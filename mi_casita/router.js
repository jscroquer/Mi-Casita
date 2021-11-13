function route(handle, pathname, response,postData) {
    console.log("A punto de rutear una peticion para " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response,postData);
    } else {
        console.log("No hay manipulador de peticion para " + pathname);
        const body = "404 No Encontrado";
        
        response.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain'
        });
        response.write(body);
        response.end();
    }
}
 
exports.route = route;
