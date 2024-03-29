import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { Grid, Typography } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import FilaTablaPersonas from "./FilaTablaPersonas";
import AlertDialog from "../reusables/AlertDialog";
import personaService from "../../services/personas.services";

export default function TablaPersonas(props) {
    const navigate = useNavigate();
    const [openAlertDialog, setOpenAlertDialog] = useState(false);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [id, setId] = useState("");

    const handleEditClick = (id) => {
        navigate("/personas/" + id);
    };

    const handleDeleteClick = (id, nombre, apellido) => {
        console.log(id)
        setNombre(nombre);
        setApellido(apellido);
        setId(id);
        setOpenAlertDialog(true);
        
    };
    
    const deletePersona = () => {
        personaService.deletePersona(id);
        navigate("/personas");
    };

    return (
        <>
            <TableContainer sx={{ height: { xs: "62vh", md: "43vh" } }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" style={{ minWidth: 3 }}>
                                {" "}
                                <Typography {...props.textLabelProps}>
                                    Id
                                </Typography>{" "}
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: 20 }}>
                                {" "}
                                <Typography {...props.textLabelProps}>
                                    Nombre{" "}
                                </Typography>
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: 20 }}>
                                {" "}
                                <Typography {...props.textLabelProps}>
                                    Apellido{" "}
                                </Typography>
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: 8 }}>
                                {" "}
                                <Typography {...props.textLabelProps}>
                                    Número Documento{" "}
                                </Typography>
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: 8 }}>
                                {" "}
                                <Typography {...props.textLabelProps}>
                                    Tipo Documento{" "}
                                </Typography>
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: 8 }}>
                                {" "}
                                <Typography {...props.textLabelProps}>
                                    Fecha Nacimiento{" "}
                                </Typography>
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: 8 }}>
                                {" "}
                                <Typography {...props.textLabelProps}>
                                    {" "}
                                </Typography>
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: 8 }}>
                                {" "}
                                <Typography {...props.textLabelProps}>
                                    {" "}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody id="tbPersona">
                        {props.personas.map((row) => (
                            <FilaTablaPersonas
                                key={row.id}
                                {...row}
                                handleEditClick={handleEditClick}
                                handleDeleteClick={handleDeleteClick}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Grid container>
                <Grid item xs={8}>
                    <TablePagination
                        id="paginacionClientes"
                        count={props.totalCount}
                        labelRowsPerPage="Filas"
                        rowsPerPage={5}
                        page={props.page}
                        onPageChange={(event, newPage) => {
                            props.setPage(newPage);
                        }}
                        component="div"
                        rowsPerPageOptions={[]}
                    />
                </Grid>
            </Grid>
            <AlertDialog
                open={openAlertDialog}
                setOpen={setOpenAlertDialog}
                title={
                    "Está por eliminar a la persona: " + nombre + " " + apellido
                }
                content={"¿Seguro desea eliminarlo"}
                buttonTextAccept={"Eliminar"}
                buttonTextDeny="Cancelar"
                buttonActionAccept={deletePersona}
            >
                <DeleteForever color="warning" fontSize="medium" />
            </AlertDialog>
        </>
    );
}
