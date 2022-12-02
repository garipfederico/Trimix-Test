const { Router } = require('express');
const router = Router();
const {
    getPersonas,
    createPersona,
    getPersona,
    updatePersona,
    deletePersona
} = require('../controllers/personas.controllers')

router.route("/")
.get(getPersonas)
.post(createPersona);

router.route("/:id")
.get(getPersona)
.put(updatePersona)
.delete(deletePersona)
module.exports = router;
