//CRUD inventario
const connection = require('./database/db')
//rtegistrar producto
exports.administrador = (req, res) => {
    const nombreProducto = req.body.nombreProducto;
    const cantidadProducto = req.body.cantidadProducto;
    const precioProducto = req.body.precioProducto;
    // const categoria = req.body.categoria; INNECESARIAS
    // const provedor = req.body.provedor;  INNECESARIAS 
    const fecha = req.body.fecha;

    connection.query('INSERT INTO productos SET ?', {
        nombreProducto: nombreProducto, 
        precioCompra: precioProducto,
        cantidad: cantidadProducto,
        fechaEntrega: fecha}, (error, results)=> {

        if(error){
            console.log(error)
        } else {  
            console.log("Registro exitoso")
            res.redirect('administrador')
        }
        
    })
}

//CONSULTAR PRODUCTOS
exports.buscar = async (req, res) => {
    try {
        const idProducto = req.query.idProducto;

        if (idProducto) {
            const results = await new Promise((resolve, reject) => {
                connection.query("SELECT * FROM productos WHERE idProductos=?", [idProducto], function(error, results){
                    if(error){
                        reject(error);
                    } else {
                        console.log(results);
                        res.render('buscarConsulta',{results}); 
                        
                    }
                });
            });
            
        } else {
            res.send(`
                <script>
                alert('No se encuentra en la base de datos');
                </script>`
            );
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
}

exports.modificarProducto = (req,res)=>{
    const nombreProducto= req.body.nombreProducto;
    const fecha = req.body.fechaEntrega;
    const cantidadProducto = req.body.cantidad;
    const precioCompra = req.body.precioCompra;
    const estado = req.body.estado;
    const id = req.body.idProductos;

    console.log('Los valores que estoy pasando a la consulta UPDATE son:',{nombreProducto:nombreProducto, 
        precioCompra:precioCompra,
        cantidad:cantidadProducto, estado: estado});
        let query = 'UPDATE siifo.productos SET ? WHERE idProductos = ?'
        if(cantidad === cantidad){
            value1 = [{nombreProducto:nombreProducto, 
                precioCompra:precioCompra,
                cantidad:cantidadProducto, estado: estado}, id]
            values =+ values1;
        }
    connection.query(query,[values, id], (error, results) =>{
        if (error){
            console.log('El error es: ',error);
        }else{
            console.log(results)
            res.redirect('/administrador');
        }
    })
}
//DELETE producto y todos los demas estan en router 
//CONSULTAR EMPLEADOS

//Agregar PROVEEDOR
exports.save = (req,res) => {
    const ciudad = req.body.ciudad;
    const nit = req.body.nit;
    const nombreProvedor= req.body.nombreProvedor;

    connection.query('INSERT INTO provedor SET ?', {
        ciudad: ciudad, 
        nit: nit,
        nombreProvedor: nombreProvedor}, (error, results)=> {

        if(error){
            console.log(error)
        } else {  
            console.log("Registro exitoso")
        }
        
    })
}
//consultar provedor
exports.consultarProvedor =async (req,res) =>{
    try {
        const idprovedor = req.query.idProveedor
        if(idprovedor){
            const results=await new Promise((resolve, reject) => {
                connection.query("SELECT * FROM provedor WHERE idprovedor = ?",[idprovedor], function(error, results){
                    if(error){
                        reject(error)
                    } else{
                        console.log(results)
                        res.render('buscarProvedor',{results})
                    }
                })
            });

        }else(
            res.send(`<script>
            alert('No se encuentra en la base de datos');
            </script>`)
        )
    } catch(error){
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
}





//CRUD ventas
//CONSULTAR ORDEN DE COMPRA Y ORDEN DE VENTA


//CRUD LOGISTICA 
//CONSULTAR EVENTO