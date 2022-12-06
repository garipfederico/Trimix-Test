const BadRequest = require("../errors/BadRequest");
const InternarlError = require("../errors/InternalError");
const NotFound = require("../errors/NotFound");
const Persona = require("../models/Persona");

const PersonaService = {};

PersonaService.getPersonas = async (req, res) => {
    let _start;
    let _limit;
    let nombre_like;
    let tipoDocumento_like;
    let searchObject = {}
if(req.query._start){
        _start = req.query._start
    }
if(req.query._limit){
     _limit = req.query._limit
    }
if(req.query.nombre_like){
     nombre_like = req.query.nombre_like
     searchObject.nombre =  new RegExp(nombre_like, `i`)
    }
if(req.query.tipoDocumento_like){
    tipoDocumento_like = req.query.tipoDocumento_like
    searchObject.tipoDocumento = tipoDocumento_like
    }
    const personasTotal = await Persona.find(searchObject).count()
    res.append('X-Total-Count', personasTotal)
    return await Persona.find(searchObject).skip(_start).limit(_limit)
};

PersonaService.addPersona = async (req) => {
    checkAddPersonaRequest(req);

    const newPersona = new Persona({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        numeroDocumento: req.body.numeroDocumento,
        tipoDocumento: req.body.tipoDocumento,
        fechaNacimiento: req.body.fechaNacimiento,
    });

    await addPersona(newPersona);
};

const addPersona = async (newPersona) => {
    try {
        await newPersona.save();
    } catch (e) {
        throw new InternarlError("Oops algo salio mal");
    }
};

const checkAddPersonaRequest = (req) => {
    if (!req.body.nombre || req.body.nombre === "") {
        throw new BadRequest("Nombre invalido");
    }
    if (!req.body.apellido || req.body.apellido === "") {
        throw new BadRequest("Apellido invalido");
    }
    if (!req.body.numeroDocumento || req.body.numeroDocumento === "") {
        throw new BadRequest("Numero de Documento invalido");
    }
    if (!req.body.tipoDocumento || req.body.tipoDocumento === "") {
        throw new BadRequest("Tipo de documento invalido");
    }
    if (!req.body.fechaNacimiento || req.body.fechaNacimiento === "") {
        throw new BadRequest("Fecha de nacimiento invalida");
    }
};

PersonaService.getPersonaById = async (req) => {
    return await Persona.findById(req.params.id);
};

PersonaService.updatePersona = async (req) => {
    checkUpdatePersonaRequest(req);
    const updatePersona = { ...req.body };
    await Persona.findByIdAndUpdate(req.params.id, updatePersona);
};

const checkUpdatePersonaRequest = (req) => {
    if (!req.params.id || req.params.id === "") {
        throw new BadRequest("Debe proporcionar un id");
    }

    if (req.body.nombre === "") {
        throw new BadRequest("Nombre no debe estar vacio");
    }
    if (req.body.apellido === "") {
        throw new BadRequest("Apellido no debe estar vacio");
    }
    if (req.body.numeroDocumento === "") {
        throw new BadRequest("Numero de Documento no debe estar vacio");
    }
    if (req.body.tipoDocumento === "") {
        throw new BadRequest("Tipo de documento no debe estar vacio");
    }
    if (req.body.fechaNacimiento === "") {
        throw new BadRequest("Fecha de nacimiento no debe estar vacio");
    }
};

PersonaService.deletePersona = async (req) => {
    checkDeletePersonaRequest(req)
    await Persona.findByIdAndDelete(req.params.id);
}

const checkDeletePersonaRequest = (req) => {
    if(!req.params.id || req.params.id === ''){
        throw new BadRequest('Debe proporcionar un id')
    }
}

module.exports = PersonaService;
