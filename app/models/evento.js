var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventoSchema = new Schema({
    clase_evento: {type: Schema.Types.ObjectId, ref: 'TipoEvento', required:true},
    hora_evento: {type: Number, required: true},
    jugador: {type: String},
    equipo: {type: Schema.Types.ObjectId, ref: 'Equipo'}
});

module.exports = mongoose.model('Evento', eventoSchema);
