// 1 - Invocamos a Express
const express = require("express");
const app = express();

//2 - Para poder capturar los datos del formulario (sin urlencoded nos devuelve "undefined")
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //además le decimos a express que vamos a usar json

//3- Invocamos a dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "./env/.env" });

//4 -seteamos el directorio de assets
app.use("/resources", express.static("public"));
app.use("/resources", express.static(__dirname + "/public"));

//5 - Establecemos el motor de plantillas
app.set("view engine", "ejs");

//6 -Invocamos a bcrypt
// const bcrypt = require("bcryptjs");

//7- variables de session
const session = require("express-session");
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// 8 - Invocamos a la conexion de la DB
const connection = require("./database/db");

//9 - establecemos las rutas
app.use('/', require('./router'));


//11 - Metodo para la autenticacion
app.post("/login", async (req, res) => {
  const correo = req.body.correo;
  const pass = req.body.pass;
  
  if (correo && pass) {
    connection.query(
      "SELECT * FROM usuarios WHERE correoUsuario = ? AND passwordUsuario = ? ",[correo, pass], async (error, results, fields) => {
        if (results.length == 0 ) {
          res.render("login", {
            alert: true,
            alertTitle: "Error",
            alertMessage: "USUARIO y/o PASSWORD incorrectas",
            alertIcon: "error",
            showConfirmButton: true,
            timer: false,
            ruta: "login",
          });

          //Mensaje simple y poco vistoso
          //res.send('Incorrect Username and/or Password!');
        } else {
          //creamos una var de session y le asignamos true si INICIO SESSION
          req.session.loggedin = true;
          req.session.name = results[0].name;
          res.redirect('/administrador')
        }
        res.end();
      }

	//   "SELECT * FROM usuarios WHERE passwordUsuario = ? ",[pass], async (error, results, fields) => {
    //     if (results.length == 0 ) {
    //       res.render("login", {
    //         alert: true,
    //         alertTitle: "Error",
    //         alertMessage: "USUARIO y/o PASSWORD incorrectas",
    //         alertIcon: "error",
    //         showConfirmButton: true,
    //         timer: false,
    //         ruta: "login",
    //       });

    //       //Mensaje simple y poco vistoso
    //       //res.send('Incorrect Username and/or Password!');
    //     } else {
    //       //creamos una var de session y le asignamos true si INICIO SESSION
    //       req.session.loggedin = true;
    //       req.session.name = results[0].name;
    //       res.redirect('/administrador')
    //     }
    //     res.end();
    //   }
    );
  

  } else {
    res.send("Please enter user and Password!");
    res.end();
  }
});

//12 - Método para controlar que está auth en todas las páginas
app.get("/", (req, res) => {
  if (req.session.loggedin) {
    res.render("index", {
      login: true,
      name: req.session.name,
    });
  } else {
    res.render("index", {
      login: false,
      name: "Debe iniciar sesión",
    });
  }
  res.end();
});

//función para limpiar la caché luego del logout
app.use(function (req, res, next) {
  if (!req.user)
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  next();
});

//Logout
//Destruye la sesión.
app.get("/logout", function (req, res) {
  req.session.destroy(() => {
    res.redirect("/"); // siempre se ejecutará después de que se destruya la sesión
  });
});

app.listen(3000, (req, res) => {
  console.log("SERVER RUNNING IN http://localhost:3000");
});
