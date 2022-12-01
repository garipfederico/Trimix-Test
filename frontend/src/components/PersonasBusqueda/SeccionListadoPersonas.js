import {
    Box,
    Button,
    Divider,
    Paper,
    Typography,
    IconButton,
    Stack,
} from "@mui/material";
import React, { useState } from "react";
import TablaPersonas from "./TablaPersonas";
import { FilterAlt, FilterAltOff } from "@mui/icons-material";

function SeccionListadoPersonas(props) {
    const handleClickFilter = () => {
        props.setNombre('');
        props.setTipoDoc('');
        props.setIsFiltered(false)
        props.handleSearch();
    };

    const buttonFilterProps = {
        onClick: handleClickFilter,
        color: "primary",
        variant: "contained",
        size: "small",
    };

    const stackStyle = {
        direction: "row",
        justifyContent: "space-between",
    };

    return (
        <>
            <Paper {...props.paperStyle}>
                <Box sx={{ p: 1 }}>
                    <Stack {...stackStyle}>
                        <Typography variant={"h5"}>Personas</Typography>
                        <Button {...buttonFilterProps}>
                            {props.isFiltered ? (
                                <FilterAltOff />
                            ) : (
                                <FilterAlt />
                            )}{" "}
                        </Button>
                    </Stack>
                    <Divider />
                    <TablaPersonas
                        personas={props.personas}
                        textLabel={props.textLabel}
                    />
                </Box>
            </Paper>
        </>
    );
}

export default SeccionListadoPersonas;
