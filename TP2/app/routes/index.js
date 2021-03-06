var router=require('express').Router();

router.use('/api/equipos', require('./equipo'));
router.use('/api/partidos', require('./partido'));
router.use('/api/eventos', require('./evento'));
router.use('/api/tipoEventos', require('./tipoEvento'));

module.exports=router;
