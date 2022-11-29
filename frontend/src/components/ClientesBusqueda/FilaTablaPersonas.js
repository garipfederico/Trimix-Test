import { TableCell, TableRow } from "@mui/material";


export default function TablesClientRow(props) {
    return (
        <TableRow hover
            tabIndex={-1}
            onClick={() => props.handleClickRow(props.idPersona)}
            sx={{ cursor: 'pointer' }}
        >
            <TableCell align='left' key={"idPersona"}> {props.idPersona}</TableCell>
            <TableCell align='left' key={"nombre"}> {props.nombre}</TableCell>
            <TableCell align='left' key={"apellido"}> {props.apellido}</TableCell>
            <TableCell align='left' key={"numdoc"}> {props.numeroDocumento}</TableCell>
            <TableCell align='left' key={"tipoDoc"}> {props.tipoDoc}</TableCell>
            <TableCell align='left' key={"fechaNac"}> {props.fechaNac}</TableCell>
        </TableRow>
    )
}