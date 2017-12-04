var mongoose = require('mongoose');
var router=require('express').Router();
var Evento = mongoose.model('Evento');

var ObjectId = mongoose.Types.ObjectId;

//obtener todos los eventos
router.get('/', (req, res, next) => {
  Evento.find({})
    .then(eventos =>{
        if(!eventos){ return res.sendStatus(401); }
        return res.json({'eventos': eventos})
    })
    .catch(next);
});

//obtener un  evento por ID
router.get('/:id', (req, res, next) => {

  let id = req.params.id
  Evento.findById(id)
    .then(evento =>{
        if(!evento){ return res.sendStatus(401); }
        return res.json({'evento': evento})
    })
    .catch(next);
});

//agregar un evento
router.post('/', (req, res, next) => {
  let clase_evento=req.body.clase_evento;
  let hora_evento=req.body.hora_evento;
  let jugador=req.body.jugador;
  let equipo=req.body.equipo;

  var evento = new Evento({
          clase_evento: clase_evento,
          hora_evento: hora_evento,
          jugador: jugador,
          equipo: equipo
      });

      evento.save((err, evento) => {
          if (err) {
              res.status(500).send(err);
          }
          res.status(200).send("Nuevo evento agregado \n" + evento);
      });
});


//modificar un evento por ID
router.put('/:id', (req, res, next) =>{
  let id = req.params.id;


  Evento.findById(id, function(err, evento) {

    evento.clase_evento=req.body.clase_evento;
    evento.hora_evento=req.body.hora_evento;
    evento.jugador=req.body.jugador;
    evento.equipo=req.body.equipo;

        evento.save((err, evento) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send("evento modificado \n" +evento);
        });
    });
});

//eliminar un evento por ID
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
Evento.findByIdAndRemove(id, (err, evento)=>{
      if(err){
          res.status(500).send(err);
      }
      else{
              res.status(200).send("evento eliminado");
      }
  });
});




module.exports=router;
