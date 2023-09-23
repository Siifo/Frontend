const express = require('express')
const router = express.Router();

const connection = require('./database/db')

// rutas front
router.get("/", (req, res) => {
	res.render("index");
  });

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/administrador", (req, res) => {
	res.render("administrador");
});

router.get("/contacto", (req, res) => {
	res.render("contacto");
})
router.get("/buscarConsulta", (req,res)=>{
	res.render("buscarConsulta")
})
router.get("/buscarConsulta", (req,res)=>{
	res.render("buscarConsulta")
})

//rutas paquetes
router.get("/banquetes", (req, res) => {
	res.render("banquetes");
})

router.get("/colegios", (req, res) => {
	res.render("colegios");
})

router.get("/recreacion", (req, res) => {
	res.render("recreacion");
})

router.get("/sonido", (req, res) => {
	res.render("sonido");
})


//sub-paquetes - colegios
router.get("/colegios/chaquetas_prom", (req, res) => {
	res.render("./colegios/chaquetas_prom");
})

router.get("/colegios/jean_day", (req, res) => {
	res.render("./colegios/jean_day");
})

router.get("/colegios/dia_del_nino", (req, res) => {
	res.render("./colegios/dia_del_nino");
})

router.get("/colegios/fiestas_prom", (req, res) => {
	res.render("./colegios/fiestas_prom");
})

//sub-paquetes - recreacion
router.get("/recreacion_infantil/ferias", (req, res) => {
	res.render("./recreacion_infantil/ferias");
})

router.get("/recreacion_infantil/decoraciones", (req, res) => {
	res.render("./recreacion_infantil/decoraciones");
})

router.get("/recreacion_infantil/baby_showers", (req, res) => {
	res.render("./recreacion_infantil/baby_showers");
})

router.get("/recreacion_infantil/recreacion_infantil", (req, res) => {
	res.render("./recreacion_infantil/recreacion_infantil");
})

router.get("/recreacion_infantil/minitks", (req, res) => {
	res.render("./recreacion_infantil/minitks");
})

router.get("/recreacion_infantil/refrigerios", (req, res) => {
	res.render("./recreacion_infantil/refrigerios");
})

router.get("/recreacion_infantil/talleres_ludicos", (req, res) => {
	res.render("./recreacion_infantil/talleres_ludicos");
})

router.get("/recreacion_infantil/saltarines.ejs", (req, res) => {
	res.render("./recreacion_infantil/saltarines.ejs");
})
// crud

router.get('/delete/:id',(req,res)=>{
	const id= req.params.id;
    const consulta='DELETE FROM siifo.productos WHERE idProductos = ?';
    connection.query(consulta, [id], (error, results)=>{
        
        if(error){
            throw(error)
        }
        else{
			      console.log(results)
            res.redirect('/administrador')
        }

    })
})


//definimos varios metodos relacionados a ajax/
// router.route('/ajax')
// .get(function(req,res){
// 	res.render('ajax', {var: "AJAX is makiaaaaa"});
// })
// .post(function(req,res){

// });


const crud  = require('./crud');
router.post('/administrador', crud.administrador)
router.get('/buscar', crud.buscar)
router.post('/save', crud.save)
router.get('/consultarProvedor', crud.consultarProvedor)
router.post('/modificarProducto', crud.modificarProducto)







module.exports = router;