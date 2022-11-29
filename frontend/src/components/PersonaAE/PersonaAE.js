import React from "react";
import { useNavigate } from "react-router-dom";
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

import GenericComboBox from "../reusables/GenericComboBox";
import DatePicker from "../reusables/DatePicker";

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
        onSubmit: () => {
            handleSubmit();
        },
    });

    const handleSubmit = async (e) => {
        e?.preventDefault();
    };

    const paperStyle = {
        sx: {
            width: "100%",
            minWidth: "250px",
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
        sx: { width: "25%", minWidth: "200px", mr: 2 },
    };

    const backButtonProps = {
        onClick: () => navigate("/home"),
        variant: "contained",
        color: "primary",
        sx: { textTransform: "none" },
    };

    const saveButtonProps = {
        onClick: handleSubmit(),
        variant: "contained",
        color: "success",
        sx: { textTransform: "none" },
    };

    return (
        <form method="post" onSubmit={formik.handleSubmit}>
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
                                        // helperText={
                                        //     'hola mundo'
                                        // }
                                        // error={
                                        //     formik.touched.nombre &&
                                        //     Boolean(formik.errors.nombre)
                                        // }
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
                                    <Typography {...textLabel}>
                                        Numero de Documento
                                    </Typography>
                                    <TextField
                                        id={"numeroDocumento"}
                                        label="Numero de documento"
                                        value={formik.values.numeroDocumento}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.numeroDocumento &&
                                            Boolean(formik.errors.numeroDocumento)
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
                                        values={["DNI", "Pasaporte", "L.E."]}
                                        width={"100%"}
                                        minWidth={200}

                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.tipoDocumento &&
                                            Boolean(formik.errors.tipoDocumento)
                                        }
                                        helperText={
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
                                        // value={formik.values.fechaPago || ""}
                                        id="fechaPago"
                                        name="fechaPago"
                                        // label="Fecha de pago"
                                        editable={true}
                                        // onChange={formik.setFieldValue}
                                        // errorProp={
                                        // formik.touched.fechaPago &&
                                        // Boolean(formik.errors.fechaPago)
                                        // }
                                        // helperTextProp={
                                        // formik.touched.fechaPago &&
                                        // formik.errors.fechaPago
                                        // }
                                    />
                                </Stack>
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
