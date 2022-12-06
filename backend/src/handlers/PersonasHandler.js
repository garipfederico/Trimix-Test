personasHandler = {};

const Persona = require("../models/Persona");
const PersonaService = require("../services/PersonaService");

personasHandler.getPersonas = async (req, res, next) => {
    PersonaService.getPersonas(req,res)
        .then((personas) => res.status(200).json(personas))
        .catch(next);
};

personasHandler.createPersona = async (req, res, next) => {
    PersonaService.addPersona(req)
        .then(() => {
            res.status(201).json({ message: "Persona creada con exito" });
        })
        .catch(next);
};

personasHandler.getPersona = async (req, res, next) => {
    PersonaService.getPersonaById(req).then((persona) => {
    res.status(200).json(persona)}
).catch(next)
};

personasHandler.updatePersona = async (req, res, next) => {
    PersonaService.updatePersona(req).then(()=>{
    res.status(201).json({ message: "Persona actualizada" })})
    .catch(next);
};

personasHandler.deletePersona = async (req, res, next) => {
   PersonaService.deletePersona(req).then(()=>{
    res.status(200).json({message:'Persona eliminada'})
   }).catch(next)
};

module.exports = personasHandler;
