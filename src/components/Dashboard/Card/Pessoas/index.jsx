import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import users from '../../../../arrayUsers.json'
import DeletarUsuario from './DeletarUsuario'
import './styles.css'
import EditarUsuario from '../EditarUsuario';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1976D2',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function TabelaPessoas({ props }) {

  const listagemUsuarios = props.listagemUsuarios;
  const setListagemUsuarios = props.setListagemUsuarios;
  const valorFiltro = props.valorFiltro.current


  useEffect(() => {
    if (valorFiltro <= 0) {
      setListagemUsuarios(users);
    }
  }, [setListagemUsuarios, valorFiltro])


  return (
    <div>
      <TableContainer component={Paper} className='table-container' >
        <Table sx={{ minWidth: 200 }} aria-label="customized table " stickyHeader size='medium'>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Nome</StyledTableCell>
              <StyledTableCell align="center">Username</StyledTableCell>
              <StyledTableCell align="center">E-mail</StyledTableCell>
              <StyledTableCell align="center">Telefone</StyledTableCell>
              <StyledTableCell align="center">Cidade</StyledTableCell>
              <StyledTableCell align="center" className='acoes-tabela-usuario'>Ações</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listagemUsuarios.map((user, index) => {
              return (
                <StyledTableRow key={index}>
                  <StyledTableCell align="center">{user.name}</StyledTableCell>
                  <StyledTableCell align="center">{user.username}</StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">{user.phone}</StyledTableCell>
                  <StyledTableCell align="center">{user.address.city}</StyledTableCell>
                  <StyledTableCell align="center">
                    <div className='acoes-tabela-usuario'>

                      <DeletarUsuario index={index} props={props} />
                      <EditarUsuario index={index} props={props}/>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
