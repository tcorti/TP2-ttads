var mongoose = require('mongoose');
var router=require('express').Router();
var TipoEvento = mongoose.model('TipoEvento');

var ObjectId = mongoose.Types.ObjectId;

//obtener todos los tipo de eventos
router.get('/', (req, res, next) => {
  TipoEvento.find({})
    .then(tipoEventos =>{
        if(!tipoEventos){ return res.sendStatus(401); }
        return res.json({'tipoEventos': tipoEventos})
    })
    .catch(next);
});


//obtener un tipo de evento por ID
router.get('/:id', (req, res, next) => {

  let id = req.params.id
  TipoEvento.findById(id)
    .then(tipoEvento =>{
        if(!tipoEvento){ return res.sendStatus(401); }
        return res.json({'tipoEvento': tipoEvento})
    })
    .catch(next);
});

//obtener un tipo de evento por nombre_evento
router.get('/nombre/:nombre_evento', (req, res, next) => {

  let nombre_evento = req.params.nombre_evento
  TipoEvento.find({nombre_evento:nombre_evento})
    .then(tipoEvento =>{
        if(!tipoEvento){ return res.sendStatus(401); }
        return res.json({'tipoEvento': tipoEvento})
    })
    .catch(next);
});


//agregar un tipo de evento
router.post('/', (req, res, next) => {
  let nombre_evento=req.body.nombre_evento;
  let descripcion=req.body.descripcion;

  var tipoEvento = new TipoEvento({
          nombre_evento: nombre_evento,
          descripcion:descripcion
      });

      tipoEvento.save((err, tipoEvento) => {
          if (err) {
              res.status(500).send(err);
          }
          res.status(200).send("Nuevo tipo de evento agregado \n" + tipoEvento);
      });
});


//modificar un tipo de evento por ID
router.put('/:id', (req, res, next) =>{
  let id = req.params.id;


  TipoEvento.findById(id, function(err, tipoEvento) {

    tipoEvento.nombre_evento=req.body.nombre_evento;
    tipoEvento.descripcion=req.body.descripcion;

        tipoEvento.save((err, tipoEvento) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send("tipo de evento modificado \n" +tipoEvento);
        });
    });
});

//eliminar un tipo de evento por ID
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
TipoEvento.findByIdAndRemove(id, (err, tipoEvento)=>{
      if(err){
          res.status(500).send(err);
      }
      else{
              res.status(200).send("tipo de evento eliminado");
      }
  });
});


module.exports=router;
