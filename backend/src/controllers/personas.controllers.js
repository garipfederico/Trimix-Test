personasCtrl = {};

const Persona = require("../models/Persona");

personasCtrl.getPersonas = async (req, res) => {
    const personas = await Persona.find();
    res.json(personas);
};

personasCtrl.createPersona = async (req, res) => {
    const {
        nombre,
        apellido,
        numeroDocumento,
        tipoDocumento,
        fechaNacimiento,
    } = req.body;
    const newPersona = new Persona({
        nombre: nombre,
        apellido: apellido,
        numeroDocumento: numeroDocumento,
        tipoDocumento: tipoDocumento,
        fechaNacimiento: fechaNacimiento,
    });
    await newPersona.save();
    res.json({message:'Persona creada'})
};

personasCtrl.getPersona = async (req, res) => {
    const persona = await Persona.findById(req.params.id)
    res.json(persona);
}

personasCtrl.updatePersona = async (req, res) => {
    const { nombre, apellido, numeroDocumento, tipoDocumento, fechaNacimiento } = req.body;
    await Persona.findByIdAndUpdate(req.params.id, {
        nombre: nombre,
        apellido: apellido,
        numeroDocumento: numeroDocumento,
        tipoDocumento: tipoDocumento,
        fechaNacimiento: fechaNacimiento,
    })
    res.json({Message:'Cliente actualizado'})
}

personasCtrl.deletePersona = async (req, res) => {
    await Persona.findByIdAndDelete(req.params.id)
    res.json({Message: 'Cliente eliminado con exito'})
}

module.exports = personasCtrl;