var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}

handle["/"] = requestHandlers.impo;
handle["/impo"] = requestHandlers.impo;
handle["/cargarimpo"] = requestHandlers.cargarimpo;
handle["/compra"] = requestHandlers.compra;
handle["/cargarcompra"] = requestHandlers.cargarcompra;
handle["/bodega"] = requestHandlers.bodega;
handle["/cargarbodega"] = requestHandlers.cargarbodega;
handle["/venta"] = requestHandlers.venta;
handle["/cargarventa"] = requestHandlers.cargarventa;
handle["/catalogo"] = requestHandlers.catalogo;
handle["/cargarcatalogo"] = requestHandlers.cargarcatalogo;
server.start(router.route,handle);
