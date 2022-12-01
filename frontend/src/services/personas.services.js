import axios from "axios"

const API_URL = 'http://localhost:3010/personas'

const getPersonas = (firstRow) => {
    return axios.get(API_URL + '?_start=' + firstRow + '&_limit=5')
    .then((res) => {
        // console.log(res.headers["x-total-count"]);
    return res}
        )
    .catch((error) =>{
        return handleError(error)
    })
}

const postPersona = (persona) => {
    return axios.post(API_URL, persona)
    .then((res)=>{console.log(res)})
    .catch((error)=>{
        return handleError(error)
    })
}

const putPersona = (persona, id) => {
    return axios.put(API_URL + '/' + id, persona)
    .then((res)=>{console.log(res)})
    .catch((error)=>{
        return handleError(error)
    })
}

const deletePersona = (id) => {
return axios.delete(API_URL +'/' + id)
.then((res)=>console.log(res))
.catch((error) => {
return handleError(error)
})}

const getPersonaById = (id) => {
    return axios.get(API_URL + '/' + id)
    .then((res) => {
        return res.data}
            )
        .catch((error) =>{
            return handleError(error)
        })
    }

    const getPersonasByNombreOrByTipoDocumento = (nombre, tipoDocumento, firstRow) => {
        // ?nombre_like=m&tipoDocumento_like=Pasaporte
        return axios.get(API_URL + 
            '?nombre_like='+ nombre +
            '&tipoDocumento_like='+ tipoDocumento +
            '&_start=' + firstRow + '&_limit=5'
            )

        .then((res) => {
             console.log(res);
            return res}
                )
            .catch((error) =>{
                return handleError(error)
            })
        }



const handleError = (error) => {
    if (error.response) {
        console.log("Error en la respuesta, mensaje: ", error.response.data);
        console.log("Status code: ", error.response.status);
        console.log("Headers: ", error.response.headers);
    } else if (error.request) {
        console.log("Error en la solicitud:", error.request);
    } else {
        console.log("Error desconocido: ", error.message);
    }
    return error;
};

const personaService = {
    getPersonas,
    postPersona,
    putPersona,
    deletePersona,
    getPersonaById,
    getPersonasByNombreOrByTipoDocumento
}

export default personaService;