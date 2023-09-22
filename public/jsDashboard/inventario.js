//MODULO INVENTARIO
//seleccionar formulario de lista de ventas
const registrarProducto = document.getElementById("registrarProducto");
const consultarProducto = document.getElementById("consultarProducto");
const registrarProveedor = document.getElementById("registrarProveedor");
const consultarProveedor = document.getElementById("consultarProveedor");


//----------------------------------------------registrar producto---------------------------------------------------------------------------------------
registrarProducto.addEventListener("click", function mostrarFormulario() {
  form.style.display = "block";
  hideDashboard.style.display = "none";
  form.innerHTML = `
  <div class="container mt-5 pt-5">
  <div class="row">
    <div class="col-12 col-sm-7 col-md-6 m-auto">
      <div class="card border-0 shadow">
        <div class="card-body">
          <form action="administrador" method="POST">
            <h2 class="text-center mb-5">Registrar Producto</h2>
            <label for="nombreProducto">Nombre de tu producto</label>
            <input type="text" name="nombreProducto" id="nombreProducto" class="form-control my-4 py-2" placeholder="Reflectores" required/>
            <label for="cantidadProducto">Cantidad</label>
            <input type="number" name="cantidadProducto" id="cantidadProducto" class="form-control my-4 py-2" placeholder="20" required />
            <label for="precioProducto">Precio Compra</label>
            <input type="number" name="precioProducto" id="precioProducto" class="form-control my-4 py-2" placeholder="000075" required/>
            <label for="categoria">Selecciona la categoria</label>
            <select id="categoria" name="categorias" required>
              <option value="" disabled >seleccione</option>
              <option value="Luces">Luces</option>
              <option value="Sonido">Sonido</option>
              <option value="decoracion">Decoraci&oacute;n</option>
              <option value="otro">otro</option>
            </select>
            <br>  
            <br>  
            <label for="fecha">fecha</label>
            <input type="date" name="fecha" id="fecha" class="form-control my-4 py-2" placeholder="" />
            <label for="nombreProducto">Proveedor</label>
            <input type="text" name="" id="provedor" class="form-control my-4 py-2" placeholder="John Angulo" />
            <div class="text-center mt-3">
              <button class="btn btn-primary">Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
`;

  getElementById('registrar').addEventListener('click', () => {
      alert('Registro exitoso')
  });

});


//---------------------------------------consultar producto--------------------------------------------------------------------------------------------
consultarProducto.addEventListener("click", function mostrarFormulario() {
  form.style.display = "block";
  hideDashboard.style.display = "none";
  form.innerHTML = `

  <div class="container mt-5 pt-5">
  <div class="row">
    <div class="col-12 col-sm-7 col-md-6 m-auto">
      <div class="card border-0 shadow">
        <div class="card-body">
          <form action="buscar" method="GET">
            <h2 class="text-center mb-5">Consultar Producto</h2>
            <!--Registrar activo-->
            <label for="idProducto">ID Producto</label>
            <input type="text" name="idProducto" id="idProducto" class="form-control my-4 py-2" placeholder="20" required/>
            <div class="text-center mt-3">
              <input class="btn btn-primary justify-content-center align-content-center" id="buscarProducto" type="submit" value="Buscar" />
            </div>
            <br>
            <br>
          </form>
          <br>
          <br>
        </div>
      </div>
    </div>
  </div>
</div>

`;

  //----------------------------------boton modificar producto------------------------------------------------------------------------------------------

  // const modificarProducto = document.getElementById("modificarProducto");
  // modificarProducto.addEventListener("click", function mostrarFormulario() {
  //   form.style.display = "block";
  //   hideDashboard.style.display = "none";
  //   form.innerHTML = `
    
  //   <div class="container mt-5 pt-5">
  //   <div class="row">
  //     <div class="col-12 col-sm-7 col-md-6 m-auto">
  //       <div class="card border-0 shadow">
  //         <div class="card-body">
  //           <form action="">
  //             <h2 class="text-center mb-5">Registrar Producto</h2>
  //             <label for="nombreProducto">Nombre de tu producto</label>
  //             <input type="text" name="" id="nombreProducto" class="form-control my-4 py-2" placeholder="Reflectores" required/>
  //             <label for="cantidadProducto">Cantidad</label>
  //             <input type="text" name="" id="cantidadProducto" class="form-control my-4 py-2" placeholder="20" required />
  //             <label for="codigoProducto">Codigo</label>
  //             <input type="text" name="" id="codigoProducto" class="form-control my-4 py-2" placeholder="000075" required/>
  //             <label for="categoria">Selecciona la categoria</label>
  //             <select id="categoria" name="categorias" required>
  //               <option value="" disabled >seleccione</option>
  //               <option value="Luces">Luces</option>
  //               <option value="Sonido">Sonido</option>
  //               <option value="decoracion">Decoraci&oacute;n</option>
  //               <option value="otro">otro</option>
  //             </select>
  //             <br>  
  //             <br>  
  //             <label for="nombreProducto">Proveedor</label>
  //             <input type="text" name="" id="" class="form-control my-4 py-2" placeholder="John Angulo" />
  //             <div class="text-center mt-3">
  //               <button class="btn btn-primary">Registrar</button>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>`;
  // });
  //boton eliminar evento
  // const botonEliminar = document.getElementById("eliminarProducto");
  // botonEliminar.addEventListener("click", function eliminarElemento() {
  //   confirm("Enserio desesas eliminar el Producto");
  // });



});

//---------------------------------------------------------registrar proveedor-----------------------------------------------------------------
registrarProveedor.addEventListener("click", function mostrarFormulario() {
  form.style.display = "block";
  hideDashboard.style.display = "none";
  form.innerHTML = `

  <div class="container mt-5 pt-5">
  <div class="row">
    <div class="col-12 col-sm-7 col-md-6 m-auto">
      <div class="card border-0 shadow">
        <div class="card-body">
          <form action="save" method="POST">
            <h2 class="text-center mb-5">Registrar Producto</h2>
            <label for="ciudad">Nombre de tu ciudad</label>
            <input type="text" name="ciudad" id="ciudad" class="form-control my-4 py-2" placeholder="bogota" required/>
            <label for="nit">Nit</label>
            <input type="number" name="nit" id="nit" class="form-control my-4 py-2" placeholder="20" required />
            <label for="nombreProvedor">Nombre provedor</label>
            <input type="text" name="nombreProvedor" id="nombreProvedor" class="form-control my-4 py-2" placeholder="..." required/>
            <div class="text-center mt-3">
              <button class="btn btn-primary">Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
`;
});

//--------------------------------------------------------------consultar proveedor -----------------------------------------------------------------------
consultarProveedor.addEventListener("click", function mostrarFormulario() {
  form.style.display = "block";
  hideDashboard.style.display = "none";
  form.innerHTML = `
  
  <div class="container mt-5 pt-5">
  <div class="row">
    <div class="col-12 col-sm-7 col-md-6 m-auto">
      <div class="card border-0 shadow">
        <div class="card-body">
          <form action="consultarProvedor" methot="POST">
            <h2 class="text-center mb-5">Consultar Proveedor</h2>
            <!--Registrar proveedor-->
            <label for="idProveedor">ID Proveedor</label>
            <input type="number" name="idProveedor" id="idProveedor" class="form-control my-4 py-2" placeholder="1050458879" required/>
            <div class="text-center mt-3">
              <input class="btn btn-primary justify-content-center align-content-center" type="submit" value="Buscar" />
            </div>
            <br>
            <br>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>`;
  //boton modificar producto
  const modificarProveedor = document.getElementById("modificarProveedor");
  modificarProveedor.addEventListener("click", function mostrarFormulario() {
    form.style.display = "block";
    hideDashboard.style.display = "none";
    form.innerHTML = `
    
    <div class="container mt-5 pt-5">
    <div class="row">
      <div class="col-12 col-sm-7 col-md-6 m-auto">
        <div class="card border-0 shadow">
          <div class="card-body">
            <form action="">
              <h2 class="text-center mb-5">Registrar Proveedor</h2>
              <label for="nombreProveedor">Nombres</label>
              <input type="text" name="" id="nombreProveedor" class="form-control my-4 py-2" placeholder = "Oscar" required/>
              <label for="apellidoProducto">Apellidos</label>
              <input type="text" name="" id="apellidoProducto" class="form-control my-4 py-2" placeholder = "rodriguez" required/>
              <label for="idProveedor">Cedula</label>
              <input type="text" name="" id="idProveedor" class="form-control my-4 py-2" placeholder = "" required/>
              <label for="codigoProducto">Codigo Producto</label>
              <input type="text" name="" id="codigoProducto" class="form-control my-4 py-2" placeholder = "000076" required/>
              <label for="categoria">Selecciona la categoria</label>
              <select id="tipoEvento" name="evento" required>
                <option value="" disabled>seleccione</option>
                <option value="Luces">Luces</option>
                <option value="Sonido">Sonido</option>
                <option value="decoracion">Decoraci&oacute;n</option>
                <option value="otro">otro</option>
              </select>
              <br>  
              <br>  
              <div class="text-center mt-3">
                <button class="btn btn-primary">Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  });
  //boton eliminar evento
  const botonEliminar = document.getElementById("eliminarProveedor");
  botonEliminar.addEventListener("click", function eliminarElemento() {
    confirm("Enserio desesas eliminar el Proveedor");
  });
});



