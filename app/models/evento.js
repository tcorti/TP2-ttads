var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventoSchema = new Schema({
    clase_evento: {type: String, required: true},
    jugador: {type: String, required: true},
    hora: {type: Number, required: true},
    equipo: {type: Schema.Types.ObjectId, ref: 'Equipo'}
});

module.exports = mongoose.model('Evento', eventoSchema);
