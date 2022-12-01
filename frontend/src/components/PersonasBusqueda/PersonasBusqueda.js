import React, { useState, useEffect, useCallback } from "react";
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
    const [isFiltered, setIsFiltered] = useState(false);

    const fetchPersonas = useCallback(async () => {
        const personas = await personaService.getPersonas();
        setPersonas(personas);
    }, []);

    const handleSearch = async () => {
        console.log("props.nombre,props.tipoDocumento", nombre, tipoDoc);
        const personasFiltradas =
            await personaService.getPersonasByNombreOrByTipoDocumento(
                nombre,
                tipoDoc
            );
        setPersonas(await personasFiltradas);
        if (nombre !== "" && tipoDoc !== "") {
            setIsFiltered(true);
        }
    };
    
    useEffect(() => {
        fetchPersonas().catch(console.error);
    }, [fetchPersonas]);

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
                    setPersonas={setPersonas}
                    tipoDoc={tipoDoc}
                    setTipoDoc={setTipoDoc}
                    setIsFiltered={setIsFiltered}
                    paperStyle={paperStyle}
                    textLabel={textLabel}
                    handleSearch={handleSearch}
                />
                <SeccionListadoPersonas
                    setTipoDoc={setTipoDoc}
                    setNombre={setNombre}
                    personas={personas}
                    paperStyle={paperStyle}
                    isFiltered={isFiltered}
                    setIsFiltered={setIsFiltered}
                    handleSearch={handleSearch}
                    textLabel={textLabel}
                />
            </Container>
        </Box>
    );
}

export default PersonasBusqueda;
