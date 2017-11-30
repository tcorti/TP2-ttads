var router=require('express').Router();

router.use('/api/equipos', require('./equipo'));
router.use('/api/partidos', require('./partido'));
router.use('/api/eventos', require('./evento'));

module.exports=router;