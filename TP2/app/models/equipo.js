var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var equipoSchema = new Schema({
    nombre: {type: String, required: true}
});

module.exports = mongoose.model('Equipo', equipoSchema);
