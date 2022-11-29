import * as yup from "yup";
const nroDocTxt = "El numero de documento ";
const currentDate = new Date();

const validationSchema = yup.object({
    nombre: yup
        .string()
        .required("El nombre es obligatorio")
        .max(50, "El nombre tiene como maximo 50 caracteres")
        .matches(/^[^0-9]+$/, "El nombre no puede tener numeros"),
    apellido: yup
        .string()
        .required("El apellido es obligatorio")
        .max(50, "El apellido tiene como maximo 50 caracteres")
        .matches(/^[^0-9]+$/, "El nombre no puede tener numeros"),
    numeroDocumento: yup
        .string()
        .matches(/^\d*$/, nroDocTxt + "debe ser solo caracteres numericos")
        .min(7, nroDocTxt + "debe ser tener como minimo 7 caracteres")
        .max(15, nroDocTxt + "debe ser tener como maximo 15 caracteres")
        .required(nroDocTxt + "es obligatorio")
        .trim(),
    tipoDocumento: yup
        .string()
        .typeError("El tipo de documento debe ser un una cadena de texto")
        .required("El tipo de documento es obligatorio"),
    fechaNacimiento: yup
        .date()
        .typeError("Seleccione una fecha valida")
        .required("La fecha de nacimiento es obligatoria")
        .max(currentDate, "La fecha no puede ser posterior a la fecha actual")
});

const personaSchema = {
    validationSchema,
};

export default personaSchema;
