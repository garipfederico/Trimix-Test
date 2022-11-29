import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import TablaPersonas from "./TablaPersonas";

function SeccionListadoPersonas(props) {
    return (
        <>
            <Paper {...props.paperStyle}>
                <Box sx={{ p: 1 }}>
                    <Typography variant={"h5"}>Personas</Typography>
                    <Divider />
                    <TablaPersonas
                        personas={[
                            {
                                idPersona: "1",
                                nombre: "Federico",
                                apellido: "Garip",
                                numeroDocumento: "28114947",
                                tipoDoc: "DNI",
                                fechaNac: "17/04/1980",
                            },
                            {
                                idPersona: "2",
                                nombre: "Jim",
                                apellido: "Morrison",
                                numeroDocumento: "800649",
                                tipoDoc: "Pasaporte",
                                fechaNac: "17/04/1980",
                            },
                        ]}
                        textLabel={props.textLabel}
                    />
                </Box>
            </Paper>
        </>
    );
}

export default SeccionListadoPersonas;
