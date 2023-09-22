//Logistica
const registrarEvento = document.getElementById("registrarEvento");
const consultarEvento = document.getElementById("consultarEvento");
const listaEvento = document.getElementById("listaEvento");
const registrarEmpleado = document.getElementById("registarEmpleado");
const consultarEmpleado = document.getElementById("consultarEmpleado");

//registrar evento
registrarEvento.addEventListener("click", function mostrarFormulario() {
  form.style.display = "block";
  hideDashboard.style.display = "none";
  form.innerHTML = `<div class="container mt-5 pt-5">
    <div class="row">
      <div class="col-12 col-sm-7 col-md-6 m-auto">
        <div class="card border-0 shadow">
          <div class="card-body">
            <form action="">
              <h2 class="text-center mb-5">Registrar Evento</h2>
              <!--Registrar activo-->
              <label for="codigoCliente">Codigo cliente</label>
              <input type="number" name="" id="codigoCliente" class="form-control my-4 py-2" placeholder="132141" required />
  
              <label for="direccionEvento">Dirección del evento</label>
              <input type="text" name="direccionEvento" id="direccionEvento" class="form-control my-4 py-2" placeholder="La casa de Miguel Rozo" required/>
  
              <label for="tipoEvento">Tipo de Evento: </label>
              <select id="tipoEvento" name="evento" required>
                <option value="Seleciona">seleciona</option>
                <option value="boda">Bodas</option>
                <option value="fiesta">Fiestas</option>
                <option value="conferencia">Conferencias</option>
                <option value="otro"></option>
              </select>
              <label for="tipoPaquete">Paquete:</label>
              <select id="tipoPaquete" name="evento" required>
                <option value="">Seleccione...</option>
                <option value="boda">Paquete1</option>
                <option value="fiesta">Paquete2</option>
                <option value="conferencia">Paquete3</option>
                <option value="otro">Paquete4</option>
              </select>
              <br>
              <br>
              <label>Empleados:</label>
              <div id="contenedorCampos">
                <input list="empleado" class="form-control my-4 py-2" id="agregarEmpleados" placeholder="agrega al empleado 1" required>
                <datalist id="empleado" name="empleado" required>
                  <option value="">Seleccione...</option>
                  <option>Kenny Felipe Mape</option>
                  <option>Pedro Alexander Castañeda</option>
                  <option>Miguel Angel amorso</option>
                  <option>Pablo Andrés Ardila Machetá</option>
                </datalist> 
              </div>
              <button type="button" id="agregarEmpleado" class="btn btn-info">+</button>
              <button type="button" id="descartarEmpleado" class="btn btn-danger">-</button>
              <br>
              <br>            
              <label for="fecha">Fecha del evento</label>
              <input type="date" name="fecha" id="fecha" class="form-control my-4 py-2" required/>
              <label for="hora">Hora del Evento:</label>
              <input type="time" id="hora" name="hora" class="form-control my-4 py-2" required>
              <div class="text-center mt-3">
              <input class="btn btn-primary" type="submit" value="Registrar">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>`;


  //agregar empleado boton
  const contenedorCampos = document.getElementById("contenedorCampos");
  const agregarEmpleado = document.getElementById("agregarEmpleado");
  let contadorEmpleados = 1;
  let datalistClon;
  let nuevoCampo;
  agregarEmpleado.addEventListener("click", () => {
    contadorEmpleados++;

    nuevoCampo = document.createElement("input");
    nuevoCampo.list = "empleado";
    nuevoCampo.classList = "form-control my-4 py-2 descartarEmpleados";
    nuevoCampo.id = "agregarEmpleados" + contadorEmpleados;
    nuevoCampo.name = "empleado No." + contadorEmpleados;
    nuevoCampo.placeholder = "agrega al empleado " + contadorEmpleados;

    const datalist = document.getElementById("empleado");
    datalistClon = datalist.cloneNode(true);
    datalistClon.setAttribute("class", "removeDatalist")
    nuevoCampo.setAttribute("list", "empleado");

    contenedorCampos.appendChild(nuevoCampo);
    contenedorCampos.appendChild(datalistClon);
  });

  
  //boton eliminar empleado
  
  const descartarEmpleado = document.getElementById("descartarEmpleado") //este es el boton
  descartarEmpleado.addEventListener("click", ()=> {
    if(contadorEmpleados > 1){
    const ultimoCampo = document.getElementById("agregarEmpleados" + contadorEmpleados);
    contenedorCampos.removeChild(ultimoCampo)
    contadorEmpleados--;
    }
    
  });
});
//consultar evento
consultarEvento.addEventListener("click", function mostrarFormulario() {
  form.style.display = "block";
  hideDashboard.style.display = "none";
  form.innerHTML = `<div class="container mt-5 pt-5">
  <div class="row">
    <div class="col-12 col-sm-7 col-md-6 m-auto">
      <div class="card border-0 shadow">
        <div class="card-body">
          <form action="">
            <h2 class="text-center mb-5">Consultar Evento</h2>
            <!--Registrar activo-->
            <label for="idEvento">ID Evento</label>
            <input type="text" name="idEvento" id="idEvento" class="form-control my-4 py-2" placeholder="20" required/>
            <div class="text-center mt-3">
              <input class="btn btn-primary justify-content-center align-content-center" type="submit" value="Buscar" />
            </div>
            <br>
            <br>
            <div class="d-flex justify-content-around">
              <button class="btn btn-primary" id="modificarEvento"><a href="#"  class="text-white">Modificar Evento</a></button>
              <button class="btn btn-primary" id="eliminarEvento"><a href="#"  class="text-white">Eliminar Evento</a></button>
              <button class="btn btn-primary" id="encuesta" class="text-white">Encuesta</button>
            </div>
          </form>
          <form action="" id="form2"></form>
        </div>
      </div>
    </div>
  </div>
</div>`;

  //boton modificar evento
  const modificarEvento = document.getElementById("modificarEvento");
  modificarEvento.addEventListener("click", function mostrarFormulario() {
    form.style.display = "block";
    hideDashboard.style.display = "none";
    form.innerHTML = `<div class="container mt-5 pt-5">
    <div class="row">
      <div class="col-12 col-sm-7 col-md-6 m-auto">
        <div class="card border-0 shadow">
          <div class="card-body">
            <form action="">
              <h2 class="text-center mb-5">Modificar Evento</h2>
              <!--Registrar activo-->
              <label for="codigoCliente">Codigo cliente</label>
              <input type="number" name="" id="codigoCliente" class="form-control my-4 py-2" placeholder="132141" required />
  
              <label for="direccionEvento">Dirección del evento</label>
              <input type="text" name="direccionEvento" id="direccionEvento" class="form-control my-4 py-2" placeholder="Cra 73 No.8-22" required/>
  
              <label for="tipoEvento">Tipo de Evento: </label>
              <select id="tipoEvento" name="evento" required>
                <option value="Seleciona">seleciona</option>
                <option value="boda">Bodas</option>
                <option value="fiesta">Fiestas</option>
                <option value="conferencia">Conferencias</option>
                <option value="otro"></option>
              </select>
              <label for="tipoPaquete">Paquete:</label>
              <select id="tipoPaquete" name="evento" required>
                <option value="">Seleccione...</option>
                <option value="boda">Paquete1</option>
                <option value="fiesta">Paquete2</option>
                <option value="conferencia">Paquete3</option>
                <option value="otro">Paquete4</option>
              </select>
  
              <label for="fecha">Fecha del evento</label>
              <input type="date" name="fecha" id="fecha" class="form-control my-4 py-2" required/>
              <label for="hora">Hora del Evento:</label>
              <input type="time" id="hora" name="hora" class="form-control my-4 py-2" required>
              <div class="text-center mt-3">
              <submit class="btn btn-primary">Registrar</submit>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  });
  const form2 = document.getElementById("form2");

  //boton eliminar evento
  const botonEliminar = document.getElementById("eliminarEvento");
  botonEliminar.addEventListener("click", function eliminarElemento() {
    confirm("Enserio desesas eliminar el Evento");
  });

  const encuesta = document.getElementById("encuesta");
  encuesta.addEventListener("click", () => {
    form2.style.display = "block";
    hideDashboard.style.display = "none";
    form2.innerHTML = `
    <br>
    <br>
    <h2 class="text-center mb-5">Encuesta de Satisfacción</h2>
            <!--Registrar activo-->
            <label for="idEvento">Id Evento:</label>
            <input type="number" id="idEvento" class="form-control my-4 py-2" placeholder="1001456789"  required> 

            <label for="calificacion">Calificanos</label>
            <select id="calificacion" required>
              <option value="">5</option>
              <option value="">4</option>
              <option value="">3</option>
              <option value="">2</option>
              <option value="">1</option>
            </select>

            <br>
            <br>  

            <label for="comentario">Cuentanos que te parecio: </label>

            <br>
            <br> 
            
            <textarea name="comentario" id="comentario" cols="30" rows="10"></textarea>

            <div class="text-center mt-3">
              <input class="btn btn-primary" type="submit" value="Registrar" />
            </div>
    `;
  });
});

listaEvento.addEventListener("click", function mostrarFormulario() {
  form.style.display = "block";
  hideDashboard.style.display = "none";
  form.innerHTML = `<div class="container mt-5 pt-5">
  <div class="row">
    <div class="col-12 col-sm-7 col-md-6 m-auto">
      <div class="card border-0 shadow">
        <div class="card-body">
          <form action="">
            <h2 class="text-center mb-5">Registrar Lista Evento</h2>
            <!--Registrar activo-->
            <label for="codigoCliente">Codigo cliente</label>
            <input type="number" name="" id="codigoCliente" class="form-control my-4 py-2" placeholder="132141" required />

            <label for="direccionEvento">Dirección del evento</label>
            <input type="text" name="direccionEvento" id="direccionEvento" class="form-control my-4 py-2" placeholder="Cra 73 No.8-22" required/>

            <label for="tipoEvento">Tipo de Evento: </label>
            <select id="tipoEvento" name="evento" required>
              <option value="Seleciona">seleciona</option>
              <option value="boda">Bodas</option>
              <option value="fiesta">Fiestas</option>
              <option value="conferencia">Conferencias</option>
              <option value="otro"></option>
            </select>
            <label for="tipoPaquete">Paquete:</label>
            <select id="tipoPaquete" name="evento" required>
              <option value="">Seleccione...</option>
              <option value="boda">Paquete1</option>
              <option value="fiesta">Paquete2</option>
              <option value="conferencia">Paquete3</option>
              <option value="otro">Paquete4</option>
            </select>

            <label for="fecha">Fecha del evento</label>
            <input type="date" name="fecha" id="fecha" class="form-control my-4 py-2" required/>
            <label for="hora">Hora del Evento:</label>
            <input type="time" id="hora" name="hora" class="form-control my-4 py-2" required>
            <div class="text-center mt-3">
              <button>
                <a href="/Componentes/404.html" class="btn btn-primary"
                  >Registrar</a
                >
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>`;
});

// Registrar empleado
registrarEmpleado.addEventListener("click", () => {
  form.style.display = "block";
  hideDashboard.style.display = "none";
  form.innerHTML = `<div class="container mt-5 pt-5">
  <div class="row">
    <div class="col-12 col-sm-7 col-md-6 m-auto">
      <div class="card border-0 shadow">
        <div class="card-body">
          <form action="">
            <h2 class="text-center mb-5">Registrar Empleado</h2>
            <!--Registrar activo-->
            <label for="identificacion">Tipo de identificación:</label>
            <select name="identificacion" id="identificacion" class="form-control my-4 py-2" required>
						<option value="C.C">C.C</option>
						<option value="T.I">T.I</option>
						</select>

            <label for="numIdentificacion">Numero de identificación</label>
            <input type="number" name="numIdentificacion" id="numIdentificacion" class="form-control my-4 py-2" placeholder="1001456789" maxlength="10" min="10" required/>

            <label for="nombres">Nombres: </label>
						<input type="text" max="45" id="nombres" class="form-control my-4 py-2"  placeholder="Gustavo Adrian" required>
            
						<label for="apellidos">Apellidos: </label>
						<input type="text" max="45" id="apellidos" class="form-control my-4 py-2" placeholder="Cerati Clark" required>

						<label for="numContact">Numero de contacto: </label>
						<input type="number" id="numContact" class="form-control my-4 py-2" placeholder="3147886969" required>
            
						<label for="correo">Correo: </label>
						<input type="text" id="correo" class="form-control my-4 py-2" placeholder="nosoycerati@gmail.com" required>

						<label for="contraseña">Contraseña: </label>
						<input type="text" id="contraseña" class="form-control my-4 py-2" placeholder="constraseña1234*" required>

						<label for="usuario">Nombre Usuario: </label>
						<input type="text" id="usuario" class="form-control my-4 py-2" placeholder="cerati123porti" required>

            <label for="tipoRol">Tipo de identificación:</label>
            <select name="rol" id="tipoRol" class="form-control my-4 py-2" required>
						<option value="C.C">Administrador</option>
						<option value="T.I">Empleado</option>
						</select>

            <div class="text-center mt-3">
              <input class="btn btn-primary" type="submit" value="Registrar" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>`;
});

// consultar empleado
consultarEmpleado.addEventListener("click", () => {
  form.style.display = "block";
  hideDashboard.style.display = "none";
  form.innerHTML = `
  
  <div class="container mt-5 pt-5">
  <div class="row">
    <div class="col-12 col-sm-7 col-md-6 m-auto">
      <div class="card border-0 shadow">
        <div class="card-body">
          <form action="">
            <h2 class="text-center mb-5">Consultar Empleado</h2>
            <!--Registrar activo-->
            <label for="numIdEmpleado">Num identificación Empleado</label>
            <input type="number" name="numIdEmpleado" id="numIdEmpleado" class="form-control my-4 py-2" placeholder="1004567890" required/>
            <div class="text-center mt-3">
              <input class="btn btn-primary justify-content-center align-content-center" type="submit" value="Buscar" />
            </div>
            <br />
            <br />
            <div class="d-flex justify-content-around">
              <button class="btn btn-primary" id="modificarProducto">
                <a href="#" class="text-white">Actualizar datos empleado</a>
              </button>
              <button class="btn btn-primary" id="eliminarProducto">
                <a href="#" class="text-white">Eliminar Empleado</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
});

// Validar encuesta de satisfacción
