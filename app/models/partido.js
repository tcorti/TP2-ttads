var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partidoSchema = new Schema({
    equipo1: {type: Schema.Types.ObjectId, ref: 'Equipo', required: true},
    equipo2: {type: Schema.Types.ObjectId, ref: 'Equipo', required: true},
    estado: {type: String, required: true},
    fecha_hora_inicio: {type: String, required: true},
    fecha_hora_fin: {type: String},
    resultado: {type: String},
    eventos: [{type: Schema.Types.ObjectId, ref: 'Evento'}]
});

module.exports = mongoose.model('Partido', partidoSchema);
