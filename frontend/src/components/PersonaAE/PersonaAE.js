import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Box,
    Button,
    Divider,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { grey } from "@mui/material/colors";
import { ArrowBack, Save } from "@mui/icons-material";
import { useFormik } from "formik";
import personaSchema from "./personaSchema";
import personaService from "../../services/personas.services";
import GenericComboBox from "../reusables/GenericComboBox";
import DatePicker from "../reusables/DatePicker";
import { AxiosError } from "axios";

function PersonaAE() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            nombre: "",
            apellido: "",
            numeroDocumento: "",
            tipoDocumento: "",
            fechaNacimiento: "",
        },
        validationSchema: personaSchema.validationSchema,
        onSubmit: async () => {
            handleSubmit();
        },
    });

    const idPersona = useParams("idPersona").idPersona;
useEffect(()=>{
    if (idPersona !== "new") {
        const fetchPersonaById = async () => {
            const persona = await personaService.getPersonaById(idPersona);
             formik.setFieldValue('nombre', persona.nombre)
             formik.setFieldValue('apellido', persona.apellido)
             formik.setFieldValue('numeroDocumento', persona.numeroDocumento)
             formik.setFieldValue('tipoDocumento', persona.tipoDocumento)
             formik.setFieldValue('fechaNacimiento', persona.fechaNacimiento)
        };
        fetchPersonaById(idPersona);
    }
},[])

    const handleSubmit = async (e) => {
        e?.preventDefault();
        const persona = { ...formik.values };
        if (idPersona !== "new") {
            const respuesta = personaService.putPersona(persona, idPersona);
            handleRespuesta(respuesta)
        } else {
            const respuesta = personaService.postPersona(persona);
            handleRespuesta(respuesta)
        }
        
    };

    const handleRespuesta = (respuesta, mensaje) => {
        if (respuesta instanceof AxiosError) {
          console.log(respuesta)
        //   processErrorMessage(respuesta.response.data)
        } else {
          navigate("/home");
        //   setDataSnackbar(mensaje);
        }
      };

    const paperStyle = {
        sx: {
            width: "100%",
            minWidth: "200px",
            mb: 3,
        },
    };

    const boxStyle = {
        sx: {
            width: "100vw",
            minHeight: "100vh",
            height: "100%",
            backgroundColor: "#dbdbdb",
            m: 0,
            py: 11,
        },
    };

    const textLabel = {
        variant: "body1",
        color: grey[700],
        style: { fontWeight: "600" },
    };

    const stackRowStyle = {
        flexDirection: { xs: "column", sm: "row" },
        sx: { mt: 2 },
    };

    const inputsStackStyle = {
        sx: { width: { xs: "100%", sm: "33%" }, mr: 2 },
    };

    const backButtonProps = {
        onClick: () => navigate("/home"),
        variant: "contained",
        color: "primary",
        sx: { textTransform: "none" },
    };

    const saveButtonProps = {
        type: "submit",
        variant: "contained",
        color: "success",
        sx: { textTransform: "none" },
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box {...boxStyle}>
                <Container>
                    <Paper {...paperStyle}>
                        <Box sx={{ p: 1 }}>
                            <Typography variant={"h5"}>
                                Datos Generales
                            </Typography>
                            <Divider />
                            <Stack {...stackRowStyle}>
                                <Stack {...inputsStackStyle}>
                                    <Typography {...textLabel}>
                                        Nombre
                                    </Typography>
                                    <TextField
                                        id="nombre"
                                        value={formik.values.nombre}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.nombre &&
                                            Boolean(formik.errors.nombre)
                                        }
                                        helperText={
                                            formik.touched.nombre &&
                                            formik.errors.nombre
                                        }
                                    />
                                </Stack>
                                <Stack {...inputsStackStyle}>
                                    <Typography {...textLabel}>
                                        Apellido
                                    </Typography>
                                    <TextField
                                        id={"apellido"}
                                        value={formik.values.apellido}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.apellido &&
                                            Boolean(formik.errors.apellido)
                                        }
                                        helperText={
                                            formik.touched.apellido &&
                                            formik.errors.apellido
                                        }
                                    />
                                </Stack>
                                <Stack {...inputsStackStyle}>
                                    <Typography {...textLabel} noWrap ellipsis>
                                        Numero de Documento
                                    </Typography>
                                    <TextField
                                        id={"numeroDocumento"}
                                        value={formik.values.numeroDocumento}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.numeroDocumento &&
                                            Boolean(
                                                formik.errors.numeroDocumento
                                            )
                                        }
                                        helperText={
                                            formik.touched.numeroDocumento &&
                                            formik.errors.numeroDocumento
                                        }
                                    />
                                </Stack>
                            </Stack>
                            <Stack {...stackRowStyle}>
                                <Stack {...inputsStackStyle}>
                                    <Typography {...textLabel}>
                                        Tipo de documento
                                    </Typography>
                                    <GenericComboBox
                                        // label="Tipo de documento"
                                        id="tipoDocumento"
                                        value={formik.values.tipoDocumento}
                                        editable={true}
                                        valueForNone=""
                                        labelForNone="Seleccionar tipo de documento"
                                        values={["DNI", "Pasaporte", "Cédula"]}
                                        width={"100%"}
                                        // minWidth={178}
                                        handleChange={formik.handleChange}
                                        errorProp={
                                            formik.touched.tipoDocumento &&
                                            Boolean(formik.errors.tipoDocumento)
                                        }
                                        helperTextProp={
                                            formik.touched.tipoDocumento &&
                                            formik.errors.tipoDocumento
                                        }
                                    />
                                </Stack>
                                <Stack {...inputsStackStyle}>
                                    <Typography {...textLabel}>
                                        Fecha de Nacimiento
                                    </Typography>
                                    <DatePicker
                                        value={
                                            formik.values.fechaNacimiento || ""
                                        }
                                        id="fechaNacimiento"
                                        name="fechaNacimiento"
                                        editable={true}
                                        onChange={formik.setFieldValue}
                                        errorProp={
                                            formik.touched.fechaNacimiento &&
                                            Boolean(
                                                formik.errors.fechaNacimiento
                                            )
                                        }
                                        helperTextProp={
                                            formik.touched.fechaNacimiento &&
                                            formik.errors.fechaNacimiento
                                        }
                                    />
                                </Stack>
                                <Stack {...inputsStackStyle} />
                            </Stack>
                        </Box>
                    </Paper>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Button {...backButtonProps}>
                            <ArrowBack />
                            Volver
                        </Button>
                        <Button {...saveButtonProps}>
                            <Save />
                            Guardar
                        </Button>
                    </Stack>
                </Container>
            </Box>
        </form>
    );
}

export default PersonaAE;
