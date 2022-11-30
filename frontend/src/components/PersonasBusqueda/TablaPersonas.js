import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { useMediaQuery, Grid, Typography } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import FilaTablaPersonas from "./FilaTablaPersonas";
import AlertDialog from "../reusables/AlertDialog";

export default function TablaPersonas(props) {
    const navigate = useNavigate();
    const [openAlertDialog, setOpenAlertDialog] = useState(false);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");

    const isMediumDevice = useMediaQuery("(max-width:900px");

    const handleEditClick = (id) => {
        console.log("edit");
        navigate("/personas/" + id);
    };
    const handleDeleteClick = (id, nombre, apellido) => {
        console.log("delete");
        setNombre(nombre);
        setApellido(apellido);
        setOpenAlertDialog(true);
    };

    const deletePersona= ()=>{
      //TODO delete a la bbdd
    }

    return (
        <>
            <TableContainer sx={{ height: { xs: "62vh", md: "43vh" } }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" style={{ minWidth: 3 }}>
                                {" "}
                                <Typography {...props.textLabel}>
                                    Id
                                </Typography>{" "}
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: 20 }}>
                                {" "}
                                <Typography {...props.textLabel}>
                                    Nombre{" "}
                                </Typography>
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: 20 }}>
                                {" "}
                                <Typography {...props.textLabel}>
                                    Apellido{" "}
                                </Typography>
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: 8 }}>
                                {" "}
                                <Typography {...props.textLabel}>
                                    Número Documento{" "}
                                </Typography>
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: 8 }}>
                                {" "}
                                <Typography {...props.textLabel}>
                                    Tipo Documento{" "}
                                </Typography>
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: 8 }}>
                                {" "}
                                <Typography {...props.textLabel}>
                                    Fecha Nacimiento{" "}
                                </Typography>
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: 8 }}>
                                {" "}
                                <Typography {...props.textLabel}> </Typography>
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: 8 }}>
                                {" "}
                                <Typography {...props.textLabel}> </Typography>
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
                        labelRowsPerPage="Filas"
                        // rowsPerPageOptions={isMediumDevice ? [] : [15, 25, 100]}
                        rowsPerPageOptions={[]}
                        component="div"
                        // count={props.clientesTotal}
                        rowsPerPage={props.rowsPerPage}
                        page={props.page}
                        onPageChange={props.handleChangePage}
                        onRowsPerPageChange={props.handleChangeRowsPerPage}
                        backIconButtonProps={{ id: "backPageButtonClients" }}
                        nextIconButtonProps={{ id: "nextPageButtonClients" }}
                        SelectProps={{ id: "selectRowsPropsClients" }}
                    />
                </Grid>
            </Grid>
            <AlertDialog
                open={openAlertDialog}
                setOpen={setOpenAlertDialog}
                title={
                    "Está por eliminar a la persona: " +
                    nombre +
                    " " +
                    apellido
                }
                content={"¿Seguro desea eliminarlo"}
                buttonTextAccept={"Eliminar"}
                buttonTextDeny="Cancelar"
                buttonActionAccept={deletePersona}
            >
                <DeleteForever color="warning" fontSize="medium" />
            </AlertDialog>
        </>
        // </Paper>
    );
}
