import React, { useState } from "react";
import {
    Button,
    Container,
    Divider,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Add, Search } from "@mui/icons-material";
import GenericComboBox from "../reusables/GenericComboBox";

function ClientesBusqueda() {
    const [nombre, setNombre] = useState("");
    const [tipoDoc, setTipoDoc] = useState("");

    const boxStyle = {
        sx: {
            width: "100vw",
            minHeight: "100vh",
            height: "100%",
            backgroundColor: "#dbdbdb",
            m: 0,
            py: 2,
        },
    };

    const stackHeaderStyle = {
        direction: "row",
        justifyContent: "space-between",
        sx: { my: 2 },
    };

    const paperStyle = {
        sx: {
            width: "100%",
            minWidth: "250px",
            // p:2
        },
    };

    const inputsStackStyle = {
        sx: { width: "25%", minWidth: "200px", mr: 2 },
    };

    const newButtonStyle = {
        variant: "contained",
        size: "small",
        color: "success",
        sx: {},
    };

    const searchButtonStyle = {
        variant: "contained",
        size: "small",
        color: "primary",
        sx: {},
    };

    return (
        <Box {...boxStyle}>
            <Container>
                <Stack {...stackHeaderStyle}>
                    <Typography variant="h4">Personas</Typography>
                    <Button {...newButtonStyle}>
                        <Add />
                        Nuevo
                    </Button>
                </Stack>
                <Paper {...paperStyle}>
                    <Box sx={{ p: 1 }}>
                        <Typography variant={"h5"}>Filtros</Typography>
                        <Divider />
                        <Stack
                            flexDirection={{ xs: "column", sm: "row" }}
                            sx={{ mt: 2 }}
                        >
                            <Stack {...inputsStackStyle}>
                                <Typography variant={"body1"}>
                                    Nombre
                                </Typography>
                                <TextField
                                    value={nombre}
                                    onChange={(event) => {
                                        setNombre(event.target.value);
                                    }}
                                />
                            </Stack>
                            <Stack {...inputsStackStyle}>
                                <Typography variant={"body1"}>
                                    Tipo documento
                                </Typography>
                                <GenericComboBox
                                    // label="Tipo de documento"
                                    id="tipoDoc"
                                    value={tipoDoc}
                                    handleChange={(event) => {
                                        setTipoDoc(event.target.value);
                                    }}
                                    editable={true}
                                    valueForNone="dfd"
                                    labelForNone="Seleccionar tipo de documento"
                                    values={["DNI", "Pasaporte", "L.E."]}
                                    minWidth={250}
                                />
                            </Stack>
                        </Stack>
                        <Stack direction={"row"} justifyContent={"flex-end"}>
                            <Button {...searchButtonStyle}>
                                <Search />
                                Buscar
                            </Button>
                        </Stack>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}

export default ClientesBusqueda;
