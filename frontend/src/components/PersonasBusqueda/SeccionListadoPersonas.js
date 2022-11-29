import { Box, Divider, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import TablaPersonas from "./TablaPersonas";

function SeccionListadoPersonas(props) {
    return (
        <>
            <Paper {...props.paperStyle}>
                <Box sx={{ p: 1 }}>
                    <Typography variant={"h5"}>Personas</Typography>
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
