const { Schema, model } = require('mongoose');

// {
//     "nombre": "Jim",
//     "apellido": "Morrison",
//     "numeroDocumento": "8006476",
//     "tipoDocumento": "Pasaporte",
//     "fechaNacimiento": "2022-11-07T03:00:00.000Z",
//     "id": 2
//   },


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