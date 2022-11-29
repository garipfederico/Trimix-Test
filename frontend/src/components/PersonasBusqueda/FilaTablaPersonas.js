import { Button, TableCell, TableRow } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

export default function TablesClientRow(props) {

    const buttonEditProps ={
        variant:'contained',
        onClick:() => props.handleEditClick(props.idPersona)
    }

    const buttonDeleteProps ={
        variant:'contained',
        color:'error',
        onClick:() => props.handleDeleteClick(props.idPersona, props.nombre, props.apellido)
    }

    return (
        <TableRow hover
            tabIndex={-1}
            >
            <TableCell align='left' key={"idPersona"} > {props.idPersona}</TableCell>
            <TableCell align='left' key={"nombre"} > {props.nombre}</TableCell>
            <TableCell align='left' key={"apellido"} > {props.apellido}</TableCell>
            <TableCell align='left' key={"numdoc"} > {props.numeroDocumento}</TableCell>
            <TableCell align='left' key={"tipoDoc"} > {props.tipoDoc}</TableCell>
            <TableCell align='left' key={"fechaNac"} > {props.fechaNac}</TableCell>
            <TableCell align='left' key={"editButton"} > <Button {...buttonEditProps} ><Edit/></Button></TableCell>
            <TableCell align='left' key={"deleteButton"} > <Button  {...buttonDeleteProps}><Delete/></Button></TableCell>
            
        </TableRow>
    )
}