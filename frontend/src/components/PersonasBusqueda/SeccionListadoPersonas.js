import {
    Box,
    Button,
    Divider,
    Paper,
    Typography,
    Stack,
} from "@mui/material";
import React from "react";
import TablaPersonas from "./TablaPersonas";
import { FilterAlt, FilterAltOff } from "@mui/icons-material";

function SeccionListadoPersonas(props) {
    const handleClickFilter = () => {
        props.setNombre(() => "");
        props.setTipoDoc(() => "");
        props.setIsFiltered(false);
        props.handleSearch(true);
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
                        textLabelProps={props.textLabelProps}
                        totalCount={props.totalCount}
                        page={props.page}
                        setPage={props.setPage}
                    />
                </Box>
            </Paper>
        </>
    );
}

export default SeccionListadoPersonas;
