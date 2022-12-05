import { Button, TableCell, TableRow } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

export default function TablesClientRow(props) {

    const buttonEditProps ={
        variant:'contained',
        onClick:() => props.handleEditClick(props._id)
    }

    const buttonDeleteProps ={
        variant:'contained',
        color:'error',
        onClick:() => props.handleDeleteClick(props._id, props.nombre, props.apellido)
    }

    const getFechaFormateada = () => {
        const fecha = props.fechaNacimiento.split("T", 1)
        const fechaArray = fecha[0].split("-")
        const fechaFormateada = fechaArray[2] + '/' + fechaArray[1] + '/' +fechaArray[0]
        return fechaFormateada
    }

    return (
        <TableRow hover
            tabIndex={-1}
            >
            <TableCell align='left' key={"id"} > {props._id}</TableCell>
            <TableCell align='left' key={"nombre"} > {props.nombre}</TableCell>
            <TableCell align='left' key={"apellido"} > {props.apellido}</TableCell>
            <TableCell align='left' key={"numdoc"} > {props.numeroDocumento}</TableCell>
            <TableCell align='left' key={"tipoDoc"} > {props.tipoDocumento}</TableCell>
            <TableCell align='left' key={"fechaNac"} > {getFechaFormateada()}</TableCell>
            <TableCell align='left' key={"editButton"} > <Button {...buttonEditProps} ><Edit/></Button></TableCell>
            <TableCell align='left' key={"deleteButton"} > <Button  {...buttonDeleteProps}><Delete/></Button></TableCell>
        </TableRow>
    )
}