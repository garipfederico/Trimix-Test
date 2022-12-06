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
    const [totalCount, setTotalCount] = useState("");
    const [page, setPage] = useState(() => 0);
    const pageSize = 5;

    const fetchPersonas = useCallback(async () => {
        const personas =
            await personaService.getPersonasByNombreOrByTipoDocumento(
                page * pageSize,
                nombre,
                tipoDoc
            );
        setPersonas(personas.data);
        setTotalCount(personas.headers["x-total-count"]);
    }, [page, isFiltered]);

    const handleSearch = async (emptyFilters) => {
        if (emptyFilters === undefined) {
            setIsFiltered(true);
        } else {
            setIsFiltered(false);
        }
        if (nombre.length === 0 && tipoDoc.length === 0) {
            setIsFiltered(false);
        }

        setPage(0);
        const personasFiltradas =
            await personaService.getPersonasByNombreOrByTipoDocumento(
                page * pageSize,
                nombre,
                tipoDoc
            );
        setPersonas(await personasFiltradas.data);
        console.log(personasFiltradas)
        setTotalCount(personasFiltradas.headers["x-total-count"]);
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

    const textLabelProps = {
        variant: "body1",
        color: grey[700],
        style: { fontWeight: "600" },
    };

    return (
        <Box {...boxStyle}>
            <Container>
                <SeccionFiltros
                    handleSearch={handleSearch}
                    nombre={nombre}
                    paperStyle={paperStyle}
                    textLabelProps={textLabelProps}
                    tipoDoc={tipoDoc}
                    setNombre={setNombre}
                    setTipoDoc={setTipoDoc}
                />
                <SeccionListadoPersonas
                    handleSearch={handleSearch}
                    isFiltered={isFiltered}
                    paperStyle={paperStyle}
                    page={page}
                    personas={personas}
                    textLabelProps={textLabelProps}
                    totalCount={totalCount}
                    setIsFiltered={setIsFiltered}
                    setNombre={setNombre}
                    setPage={setPage}
                    setTipoDoc={setTipoDoc}
                />
            </Container>
        </Box>
    );
}

export default PersonasBusqueda;
