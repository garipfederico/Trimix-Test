import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Paper, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Add, Search } from "@mui/icons-material";
import GenericComboBox from "../reusables/GenericComboBox";

function SeccionFiltros(props) {
    const navigate = useNavigate();

    const stackHeaderStyle = {
        direction: "row",
        justifyContent: "space-between",
        sx: { my: 2 },
    };

    const stackRowStyle = {
        flexDirection: { xs: "column", sm: "row" },
        sx: { mt: 2 },
    };

    const inputsStackStyle = {
        sx: { width: "25%", minWidth: "200px", mr: 2 },
    };

    const newButtonProps = {
        onClick: () => navigate("/personas/new"),
        variant: "contained",
        color: "success",
        sx: { textTransform: "none" },
    };

    const searchButtonProps = {
        onClick: () => props.handleSearch(),
        variant: "contained",
        color: "primary",
        sx: { textTransform: "none" },
    };
    return (
        <>
            <Stack {...stackHeaderStyle}>
                <Typography variant="h4">Personas</Typography>
                <Button {...newButtonProps}>
                    <Add />
                    Nuevo
                </Button>
            </Stack>
            <Paper {...props.paperStyle}>
                <Box sx={{ p: 1 }}>
                    <Typography variant={"h5"}>Filtros</Typography>
                    <Divider />
                    <Stack {...stackRowStyle}>
                        <Stack {...inputsStackStyle}>
                            <Typography {...props.textLabelProps}>
                                Nombre
                            </Typography>
                            <TextField
                                value={props.nombre}
                                onChange={(event) => {
                                    props.setNombre(event.target.value);
                                }}
                            />
                        </Stack>
                        <Stack {...inputsStackStyle}>
                            <Typography {...props.textLabelProps}>
                                Tipo de documento
                            </Typography>
                            <GenericComboBox
                                id="tipoDoc"
                                value={props.tipoDoc}
                                handleChange={(event) => {
                                    props.setTipoDoc(event.target.value);
                                }}
                                editable={true}
                                valueForNone=""
                                labelForNone="Seleccionar tipo de documento"
                                values={["DNI", "Pasaporte", "Cédula"]}
                                width={"100%"}
                                minWidth={200}
                            />
                        </Stack>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"flex-end"}>
                        <Button {...searchButtonProps}>
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
