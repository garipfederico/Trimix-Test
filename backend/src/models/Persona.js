const { Schema, model } = require('mongoose');

const personaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    numeroDocumento: {
        type: Number,
        required: true
    },
    tipoDocumento: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        default: Date.now,
        required: true
    }
},{
    timestamps: true
});

module.exports = model('Persona', personaSchema)