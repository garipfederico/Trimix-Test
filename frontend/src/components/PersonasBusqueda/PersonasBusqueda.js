import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";
import SeccionFiltros from "./SeccionFiltros";
import SeccionListadoPersonas from "./SeccionListadoPersonas";

import personaService from "../../services/personas.services";

function PersonasBusqueda() {
    const [nombre, setNombre] = useState("");
    const [tipoDoc, setTipoDoc] = useState("");
    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        const fetchPersonas = async () => {
            const personas = await personaService.getPersonas;
            console.log(await personas);
            // setPersonas(personas);
        };
        setPersonas([
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
        ])

        fetchPersonas();
    }, []);

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
            py: 2,
        },
    };

    const textLabel = {
        variant: "body1",
        color: grey[700],
        style: { fontWeight: "600" },
    };



    return (
        <Box {...boxStyle}>
            <Container>
                <SeccionFiltros
                    nombre={nombre}
                    setNombre={setNombre}
                    tipoDoc={tipoDoc}
                    setTipoDoc={setTipoDoc}
                    paperStyle={paperStyle}
                    textLabel={textLabel}
                />
                <SeccionListadoPersonas
                    personas={personas}
                    paperStyle={paperStyle}
                    textLabel={textLabel}
                />
            </Container>
        </Box>
    );
}

export default PersonasBusqueda;
