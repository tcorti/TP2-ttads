var mongoose = require('mongoose');
var router=require('express').Router();
var Equipo = mongoose.model('Equipo');

var ObjectId = mongoose.Types.ObjectId;

//obtener todos los equipos
router.get('/', (req, res, next) => {
  Equipo.find({})
    .then(equipos =>{
        if(!equipos){ return res.sendStatus(401); }
        return res.json({'equipos': equipos})
    })
    .catch(next);
});


//obtener un equipo por ID
router.get('/:id', (req, res, next) => {

  let id = req.params.id
  Equipo.findById(id)
    .populate('equipos')
    .then(equipo =>{
        if(!equipo){ return res.sendStatus(401); }
        return res.json({'equipo': equipo})
    })
    .catch(next);
});

//obtener un equipo por nombre
router.get('/nombre/:nombre', (req, res, next) => {

  let nombre = req.params.nombre
  Equipo.find({nombre:nombre})
    .populate('equipos')
    .then(equipo =>{
        if(!equipo){ return res.sendStatus(401); }
        return res.json({'equipo': equipo})
    })
    .catch(next);
});


//agregar un equipo
router.post('/', (req, res, next) => {
  let nombre=req.body.nombre;

  var equipo = new Equipo({
          nombre: nombre
      });

      equipo.save((err, team) => {
          if (err) {
              res.status(500).send(err);
          }
          res.status(200).send("Nuevo Equipo agregado \n" + team);
      });
});


//modificar un equipo por ID
router.put('/:id', (req, res, next) =>{
  let id = req.params.id;


  Equipo.findById(id, function(err, equipo) {

    equipo.nombre=req.body.nombre;

        equipo.save((err, equipo) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send("equipo modificado \n" +equipo);
        });
    });
});



module.exports=router;
