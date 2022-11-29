import axios from "axios"

const API_URL = 'https://rickandmortyapi.com/api/'

const getPersonas = () => {
    return axios.get(API_URL + 'character')
    .then((res) => {
        console.log(res.data.results)}
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
}

export default personaService;