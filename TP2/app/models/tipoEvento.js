var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tipoEventoSchema = new Schema({
    nombre_evento: {type: String, required: true},
    descripcion:{type: String}
});

module.exports = mongoose.model('TipoEvento', tipoEventoSchema);
