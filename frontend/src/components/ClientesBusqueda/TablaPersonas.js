import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { useMediaQuery, Grid, Typography } from '@mui/material';
import FilaTablaPersonas from './FilaTablaPersonas';

export default function TablaPersonas(props) {

  const navigate = useNavigate()

  const isMediumDevice = useMediaQuery('(max-width:900px');

  const handleClickRow = (id) => {
    navigate('/personas/:' + id)
  }

  return (
    <>
      <TableContainer sx={{ height: { xs: '62vh', md: '48vh' } }} >
        <Table stickyHeader aria-label="sticky table"  >

          <TableHead>
            <TableRow>
              <TableCell align='left' style={{ minWidth: 3 }}> <Typography {...props.textLabel}>Id</Typography> </TableCell>
              <TableCell align='left' style={{ minWidth: 20 }}> <Typography {...props.textLabel}>Nombre </Typography></TableCell>
              <TableCell align='left' style={{ minWidth: 20 }}> <Typography {...props.textLabel}>Apellido </Typography></TableCell>
              <TableCell align='left' style={{ minWidth: 8 }}> <Typography {...props.textLabel}>Número Documento </Typography></TableCell>
              <TableCell align='left' style={{ minWidth: 8 }}> <Typography {...props.textLabel}>Tipo Documento </Typography></TableCell>
              <TableCell align='left' style={{ minWidth: 8 }}> <Typography {...props.textLabel}>Fecha Nacimiento </Typography></TableCell>
            </TableRow>
          </TableHead>

          <TableBody id='tbPersona'>
            {props.personas.map((row) => (
              <FilaTablaPersonas key={row.idPersona}
                {...row}
                handleClickRow={handleClickRow}
              />
            ))}
          </TableBody>

        </Table>
      </TableContainer>

      <Grid container  >
        <Grid item xs={8} >
          <TablePagination
            id='paginacionClientes'
            labelRowsPerPage="Filas"
            rowsPerPageOptions={isMediumDevice ? [] : [15, 25, 100]}
            component="div"
            count={props.clientesTotal}
            rowsPerPage={props.rowsPerPage}
            page={props.page}
            onPageChange={props.handleChangePage}
            onRowsPerPageChange={props.handleChangeRowsPerPage}
            backIconButtonProps={{id:'backPageButtonClients'}}
            nextIconButtonProps={{id:'nextPageButtonClients'}}
            SelectProps={{id:'selectRowsPropsClients'}}
          />
        </Grid>
      </Grid>
</>
    // </Paper>
  );
}