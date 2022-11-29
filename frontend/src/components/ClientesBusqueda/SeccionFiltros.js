import React from "react";
import {
    Button,
    Divider,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Add, Search } from "@mui/icons-material";
import GenericComboBox from "../reusables/GenericComboBox";


function SeccionFiltros(props) {
    const stackHeaderStyle = {
        direction: "row",
        justifyContent: "space-between",
        sx: { my: 2 },
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
        <>
            <Stack {...stackHeaderStyle}>
                <Typography variant="h4">Personas</Typography>
                <Button {...newButtonStyle}>
                    <Add />
                    Nuevo
                </Button>
            </Stack>
            <Paper {...props.paperStyle}>
                <Box sx={{ p: 1 }}>
                    <Typography variant={"h5"}>Filtros</Typography>
                    <Divider />
                    <Stack
                        flexDirection={{ xs: "column", sm: "row" }}
                        sx={{ mt: 2 }}
                    >
                        <Stack {...inputsStackStyle}>
                            <Typography {...props.textLabel}>Nombre</Typography>
                            <TextField
                                value={props.nombre}
                                onChange={(event) => {
                                    props.setNombre(event.target.value);
                                }}
                            />
                        </Stack>
                        <Stack {...inputsStackStyle}>
                            <Typography {...props.textLabel}>
                                Tipo documento
                            </Typography>
                            <GenericComboBox
                                // label="Tipo de documento"
                                id="tipoDoc"
                                value={props.tipoDoc}
                                handleChange={(event) => {
                                    props.setTipoDoc(event.target.value);
                                }}
                                editable={true}
                                valueForNone="dfd"
                                labelForNone="Seleccionar tipo de documento"
                                values={["DNI", "Pasaporte", "L.E."]}
                                minWidth={200}
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
        </>
    );
}

export default SeccionFiltros;
