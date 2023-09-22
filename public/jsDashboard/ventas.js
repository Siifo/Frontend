//MODULO VENTAS
//seleccionar formulario de lista de ventas
const registrarOV = document.getElementById("registrarOV");
const consultarOV = document.getElementById("consultarOV");
const registrarOC = document.getElementById("registrarOC");
const consultarOC = document.getElementById("consultarOC");
//registrar orden de venta
registrarOV.addEventListener("click", function mostrarFormulario() {
  form.style.display = "block";
  hideDashboard.style.display = "none";
  form.innerHTML = `<div class="container mt-5 pt-5">
  <div class="row">
    <div class="col-12 col-sm-7 col-md-6 m-auto">
      <div class="card border-0 shadow">
        <div class="card-body" >
          <form action="">
            <h2 class="text-center mb-5">Ordenes</h2>
            <!--Registrar activo-->
            <label for="idOrdenV">Id orden venta</label>
            <input type="number" name="venta" id="idOrdenV" class="form-control my-4 py-2" placeholder="132141" required />
            <label for="fecha">Fecha de pago</label>
            <input type="datet" name="fecha" id="fecha" class="form-control my-4 py-2" required/>

            <label for="aforo">Aforo</label>
            <input type="number" name="aforo" id="aforo" class="form-control my-4 py-2" required/>
            
            <label for="valorEvento">Valor evento</label>
            <input type="number" id="valorEvento" class="form-control my-4 py-2" required/>
            <label for="fecha">Fecha del evento</label>
            <input type="date" name="fecha" id="fecha" class="form-control my-4 py-2" required/>
            <label for="hora">Hora del Evento:</label>
            <input type="time" id="hora" name="hora" class="form-control my-4 py-2" required>
            <input class="btn btn-primary" type="submit" value="Registrar">
          </form>
        </div>
      </div>
    </div>
  </div>
</div>`;
});

consultarOV.addEventListener("click", function mostrarFormulario() {
  form.style.display = "block";
  hideDashboard.style.display = "none";
  form.innerHTML = `<div class="container mt-5 pt-5"> 
    <div class="row">
      <div class="col-12 col-sm-7 col-md-6 m-auto">
        <div class="card border-0 shadow">
          <div class="card-body">
            <form action="">
              <h2 class="text-center mb-5">Consultar Orden de venta</h2>
              <label for="idOv">ID Orden de venta</label>
              <input type="text" name="idOv" id="idOv" class="form-control my-4 py-2" placeholder="1342" required/>
              <div class="text-center mt-3">
                <input class="btn btn-primary justify-content-center align-content-center" type="submit" value="Buscar" />
              </div>
              <br>
              <br>
              <div class="d-flex justify-content-around">
                <button class="btn btn-primary" id="modificarEvento" class="text-white">Modificar Evento</button>
                <button class="btn btn-primary" id="eliminarOV" class="text-white">Eliminar Evento</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  const botonEliminar = document.getElementById("eliminarOV");
  botonEliminar.addEventListener("click", function eliminarElemento() {
    confirm("¿Enserio desesas eliminar la orden de venta?");
  });
});

registrarOC.addEventListener("click", function mostrarFormulario() {
  form.style.display = "block";
  hideDashboard.style.display = "none";
  form.innerHTML = `<div class="container mt-5 pt-5">
  <div class="row">
    <div class="col-12 col-sm-7 col-md-6 m-auto">
      <div class="card border-0 shadow">
        <div class="card-body">
          <form action="">
            <h2 class="text-center mb-5">Ordenes</h2>
            <!--Registrar activo-->
            <label for="identificacionCliente">Identificación Cliente:</label>
            <input type="number" name="identificacionCliente" id="identificacionCliente" class="form-control my-4 py-2" placeholder="1001301480" required />
            <label for="valorEvento">Valor</label>
            <input type="number" name="valorEvento" id="valorEvento" class="form-control my-4 py-2" placeholder="1.500.000" required/>

            <label for="estadoOrden">Estado de la Orden: </label>
            <select id="estadoOrden" name="estadoOrden" required>
              <option value="Seleciona">Seleciona...</option>
              <option value="boda">Activa</option>
              <option value="fiesta">En tramite</option>
              <option value="conferencia">Finalizada</option>
            </select>
            <br>
            <br>
            <label for="metodoPago">Metodo de Pago:</label>
            <select id="metodoPago" name="metodoPago" required>
              <option value="">Seleccione...</option>
              <option value="nequi">Nequi</option>
              <option value="DaviPlata">Daviplata</option>
              <option value="tarjeta">Tarjeta</option>
              <option value="efectivo">Efectivo</option>
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
