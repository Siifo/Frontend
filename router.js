const express = require('express')
const router = express.Router();

const connection = require('./database/db')

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


router.get('/delete/:id',(req,res)=>{
	const id= req.params.id;
    const query = 'CALL siifo.eliminarProducto(?)'
    connection.query(query, [id], (error, results)=>{
        
        if(error){
            console.log(error)
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