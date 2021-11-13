var exec = require("child_process").exec;
var qs = require('querystring');
var conexion = require("./db");

function impo(response,postData) {
    console.log("Manipulador de petición 'impo' fue llamado.");
    
    var body = '<html>'+
    '<head>'+
    '<meta http‐equiv="Content‐Type" content="text/html;charset=UTF‐8" />'+
    '</head>'+
    '<body>'+
    '<form action="/cargarimpo" method="post">'+ 
    
    '<label for="valorimpo">ingrese valor de compra</label>'+
    '<input type="text" name="valorimpo" required/>'+

    '<label for="codigoimpo">codigo de producto a importar</label>'+
    '<input type="text" name="codigoimpo" required/>'+

    '<label for="paisimpo">pais de origen de importacion</label>'+
    '<input type="text" name="paisimpo" required/>'+

    '<label for="proveedorimpo">proveedor de importacion</label>'+
    '<input type="text" name="proveedorimpo" required/>'+

    '<label for="ivaimpo"><br><br></label>'+

    '<label for="ivaimpo"><br>iva de importacion</label>'+
    '<input type="text" name="ivaimpo" required/>'+

    '<label for="transporteimpo">costo de transporte de importacion </label>'+
    '<input type="text" name="transporteimpo" required/>'+

    '<label for="aduanaimpo">aduana de ingreso de importacion </label>'+
    '<input type="text" name="aduanaimpo" required/>'+

    '<label for="productoimpo">cantidad de productos importados</label>'+
    '<input type="text" name="productoimpo" required/>'+

    '<input type="submit" value="Enviar"/>'+
    '</form>'+
    '</body>'+
    '</html>';
    
    response.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/html'
    });
    response.write(body);
    response.end();
}

function cargarimpo(response,postData) {
    console.log("Manipulador de petición 'impo' fue llamado.");
    
    var valorimpo = qs.parse(postData)["valorimpo"];
    var codigoimpo = qs.parse(postData)["codigoimpo"];
    var paisimpo = qs.parse(postData)["paisimpo"];
    var proveedorimpo = qs.parse(postData)["proveedorimpo"];
    var ivaimpo = qs.parse(postData)["ivaimpo"];
    var transporteimpo = qs.parse(postData)["transporteimpo"];
    var aduanaimpo = qs.parse(postData)["aduanaimpo"];
    var productoimpo = qs.parse(postData)["productoimpo"];

    conexion.query('insert into impo (valorimpo,codigoimpo,paisimpo,proveedorimpo,ivaimpo,transporteimpo,aduanaimpo,productoimpo) values (?,?,?,?,?,?,?,?)',
                            [valorimpo,codigoimpo,paisimpo,proveedorimpo,ivaimpo,transporteimpo,aduanaimpo,productoimpo], (err, res) => {
                                if (err) reject(err);
                                else console.log("Registros de importacion guardados exitosamente.");});
                            
    
    var body = '<html>'+
    '<head></head>'+

    '<body><h1>Valor de compra de '+valorimpo+' con codigo de producto '+codigoimpo+'  pais de origen '+paisimpo+' proveedor '+proveedorimpo+' Iva de importacion '+ivaimpo+' con un costo de transporte '+transporteimpo+' y con aduana de ingreso '+aduanaimpo+' y una cantidad total de productos de '+productoimpo+'</h1></body></html>';
    
    response.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/html'
    });
    response.write(body);
    response.end();
}


function compra(response,postData) {
    console.log("Manipulador de petición 'impo' fue llamado.");
    
    var body = '<html>'+
    '<head>'+
    '<meta http‐equiv="Content‐Type" content="text/html;charset=UTF‐8" />'+
    '</head>'+
    '<body>'+
    '<form action="/cargarcompra" method="post">'+
    '<label for="valorcompra">ingrese valor de compra</label>'+
    '<input type="text" name="valorcompra" required/>'+

    '<label for="codigocompra">ingrese codigo de producto</label>'+
    '<input type="text" name="codigocompra" required/>'+

    '<label for="proveedorcompra">ingrese el Proveedor</label>'+
    '<input type="text" name="proveedorcompra" required/>'+

    '<label for="productocompra">ingrese la cantidad de productos</label>'+
    '<input type="text" name="productocompra" required/>'+

    '<input type="submit" value="Enviar"/>'+
    '</form>'+
    '</body>'+
    '</html>';
    
    response.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/html'
    });
    response.write(body);
    response.end();
}
function cargarcompra(response,postData) {
    console.log("Manipulador de petición 'impo' fue llamado.");
    
    var valorcompra = qs.parse(postData)["valorcompra"];
    var codigocompra = qs.parse(postData)["codigocompra"];
    var proveedorcompra = qs.parse(postData)["proveedorcompra"];
    var productocompra = qs.parse(postData)["productocompra"];

    conexion.query('insert into compra (valorcompra,codigocompra,proveedorcompra,productocompra) values (?,?,?,?)',
    [valorcompra,codigocompra,proveedorcompra,productocompra], (err, res) => {
        if (err) reject(err);
        else console.log("Registros de compras guardados exitosamente.");})

    
    var body = '<html>'+
    '<head></head>'+

    '<body><h1> Valor de compra de '+valorcompra+' con codigo de producto '+codigocompra+' proveedor '+proveedorcompra+' y una cantidad total de productos de '+productocompra+'</h1></body></html>';
    
    response.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/html'
    });
    response.write(body);
    response.end();
}

function bodega(response,postData) {
    console.log("Manipulador de petición 'impo' fue llamado.");
    
    var body = '<html>'+
    '<head>'+
    '<meta http‐equiv="Content‐Type" content="text/html;charset=UTF‐8" />'+
    '</head>'+
    '<body>'+
    '<form action="/cargarbodega" method="post">'+
    '<label for="productosbodega">cantidad de productos ingresados</label>'+
    '<input type="text" name="productosbodega" required/>'+

    '<label for="codigobodega"> codigo de producto</label>'+
    '<input type="text" name="codigobodega" required/>'+

    '<input type="submit" value="Enviar"/>'+
    '</form>'+
    '</body>'+
    '</html>';
    
    response.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/html'
    });
    response.write(body);
    response.end();
}
function cargarbodega(response,postData) {
    console.log("Manipulador de petición 'impo' fue llamado.");
    
    var productosbodega = qs.parse(postData)["productosbodega"];
    var codigobodega = qs.parse(postData)["codigobodega"];

    conexion.query('insert into bodega (productosbodega,codigobodega) values (?,?)',
    [productosbodega,codigobodega], (err, res) => {
        if (err) reject(err);
        else console.log("Registros de productos en bodega guardados exitosamente.");})
    
    var body = '<html>'+
    '<head></head>'+

    '<body><h1>La cantidad de productos ingresados es de '+productosbodega+' con codigos de producto de '+codigobodega+' </h1></body></html>';
    
    response.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/html'
    });
    response.write(body);
    response.end();
}


function venta(response,postData) {
    console.log("Manipulador de petición 'impo' fue llamado.");
    
    var body = '<html>'+
    '<head>'+
    '<meta http‐equiv="Content‐Type" content="text/html;charset=UTF‐8" />'+
    '</head>'+
    '<body>'+
    '<form action="/cargarventa" method="post">'+

    '<label for="codigoventa">ingrese codigo del producto</label>'+
    '<input type="text" name="codigoventa" required/>'+

    '<label for="cantidadventa">ingresar cantidad de productos a vender </label>'+
    '<input type="text" name="cantidadventa" required/>'+

    '<label for="valorventa">ingrese el valor de venta</label>'+
    '<input type="text" name="valorventa" required/>'+

    '<input type="submit" value="Enviar"/>'+
    '</form>'+
    '</body>'+
    '</html>';
    
    response.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/html'
    });
    response.write(body);
    response.end();
}
function cargarventa(response,postData) {
    console.log("Manipulador de petición 'impo' fue llamado.");

    var codigoventa = qs.parse(postData)["codigoventa"];
    var cantidadventa = qs.parse(postData)["cantidadventa"];
    var valorventa = qs.parse(postData)["valorventa"];

    conexion.query('insert into venta (codigoventa,cantidadventa,valorventa) values (?,?,?)',
    [codigoventa,cantidadventa,valorventa], (err, res) => {
        if (err) reject(err);
        else console.log("productos disponibles en venta guardados y agregados.");})

    
    var body = '<html>'+
    '<head></head>'+

    '<body><h1> El codigo de producto es '+codigoventa+' y la cantidad de productos a vender es '+cantidadventa+' y un valor de venta de  '+valorventa+'</h1></body></html>';
    
    response.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/html'
    });
    response.write(body);
    response.end();
}

function catalogo(response,postData) {
    console.log("Manipulador de petición 'impo' fue llamado.");
    
    var body = '<html>'+
    '<head>'+
    '<meta http‐equiv="Content‐Type" content="text/html;charset=UTF‐8" />'+
    '</head>'+
    '<body>'+
    '<form action="/cargarcatalogo" method="post">'+

    '<label for="productocatalogo">ingrese Productos disponibles en el inventario</label>'+
    '<input type="text" name="productocatalogo" required/>'+

    '<input type="submit" value="Enviar"/>'+
    '</form>'+
    '</body>'+
    '</html>';
    
    response.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/html'
    });
    response.write(body);
    response.end();
}
function cargarcatalogo(response,postData) {
    console.log("Manipulador de petición 'impo' fue llamado.");

    var productocatalogo = qs.parse(postData)["productocatalogo"];

    conexion.query('insert into catalogo (productocatalogo) values (?)',
                    [productocatalogo], (err, res) => {
                        if (err) reject(err);
                        else console.log("productos disponibles en catalogo.");})

    var body = '<html>'+
    '<head></head>'+

    '<body><h1> El total de producto disponibles en inventario es '+productocatalogo+'</h1></body></html>';
    
    response.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/html'
    });
    response.write(body);
    response.end();
}


exports.impo = impo;
exports.cargarimpo = cargarimpo;
exports.compra = compra;
exports.cargarcompra = cargarcompra;
exports.bodega = bodega;
exports.cargarbodega = cargarbodega;
exports.venta = venta;
exports.cargarventa = cargarventa;
exports.catalogo = catalogo; 
exports.cargarcatalogo = cargarcatalogo;

 
