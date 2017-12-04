var mongoose = require('mongoose');
var router=require('express').Router();
var Partido = mongoose.model('Partido');
var Evento = mongoose.model('Evento');

var ObjectId = mongoose.Types.ObjectId;



//consultar todos los partidos
router.get('/', (req, res, next) => {
  Partido.find({})
    .then(partidos =>{
        if(!partidos){ return res.sendStatus(401); }
        return res.json({'partidos': partidos})
    })
    .catch(next);
});



//consultar todos los partidos activos
router.get('/activos', (req, res, next) => {
  Partido.find({estado:"Activo"})
  .populate('equipo1')
  .populate('equipo2')
    .then(partido =>{
        if(!partido){ return res.sendStatus(401); }
        return res.json(partido)
    })
    .catch(next);
});



//consultar un partido por ID
router.get('/:id', (req, res, next) => {

  let id = req.params.id
  Partido.findById(id)
    .then(partido =>{
        if(!partido){ return res.sendStatus(401); }
        return res.json({'partido': partido})
    })
    .catch(next);
});




//dar de alta un partido
router.post('/', (req, res, next) => {
  let equipo1=req.body.equipo1;
  let equipo2=req.body.equipo2;
  let fecha_hora_inicio=req.body.fecha_hora_inicio;

  var partido = new Partido({
          equipo1: equipo1,
          equipo2: equipo2,
          estado: "Activo",
          fecha_hora_inicio: fecha_hora_inicio
      });

      partido.save((err, partido) => {
          if (err) {
              res.status(500).send(err);
          }
          res.status(200).send("Nuevo partido agregado \n" + partido);
      });
});


//eliminar un partido por ID
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
Partido.findByIdAndRemove(id, (err, partido)=>{
      if(err){
          res.status(500).send(err);
      }
      else{
              res.status(200).send("partido eliminado");
      }
  });
});

//finalizar un partido con su ID
router.put('/fin/:id', (req, res, next) =>{
  let id = req.params.id;


  Partido.findById(id, function(err, partido) {

    partido.estado="Finalizado";
    partido.fecha_hora_fin=req.body.fecha_hora_fin;
    partido.resultado=req.body.resultado;


        partido.save((err, partido) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send("partido finalizado \n" +partido);
        });
    });
});

//agregar un evento a un partido con su ID
router.put('/evento/:id', (req, res, next) =>{
  let id = req.params.id;


  Partido.findById(id, function(err, partido) {

    partido.eventos.push(req.body.idEvento);

        partido.save((err, partido) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send("evento agregado al partido \n" +partido);
        });
    });
});



//consultar detalles de un partido por ID
router.get('/detalle/:id', (req, res, next) => {

  let id = req.params.id
  Partido.findById(id)
    .populate('equipo1').populate('equipo2')
    //.populate('eventos')
    .then(partido =>{
        if(!partido){ return res.sendStatus(401); }
// return res.json({'partido': partido})
        Evento.find({_id:partido.eventos})
          .populate('clase_evento').populate('equipo')
          .then(eventos =>{
              if(!eventos){ return res.sendStatus(401); }

       return res.json({'partido': partido, 'eventos': eventos})
          })


    })
    .catch(next);
  });





/*  let id = req.params.id
  Partido.findById(id)
    .populate('partidos')
    .then(partido =>{
        if(!partido){ return res.sendStatus(401); }


        let id_equipo1 = partido.equipo1
        Equipo.findById(id_equipo1)
          .populate('equipos')
          .then(equipo1 =>{
              if(!equipo1){ return res.sendStatus(401); }
             return res.json({'equipo1': equipo1})

            let id_equipo2 = partido.equipo2
             Equipo.findById(id_equipo2)
               .populate('equipos')
               .then(equipo2 =>{
                   if(!equipo2){ return res.sendStatus(401); }

                    Evento.find(partido.eventos)
                      .then(eventos =>{
                          if(!eventos){ return res.sendStatus(401); }
                        return res.json({'equipo1': equipo1,'equipo2': equipo2,'eventos': eventos})
                      })


               })

          })

    })
    .catch(next);
});
*/


module.exports=router;
