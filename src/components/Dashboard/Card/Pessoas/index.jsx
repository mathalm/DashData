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
import './styles.css'

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


export default function TabelaPessoas({ listagemUsuarios, setListagemUsuarios, valorFiltro, possivelExcluir, possivelEditar,setUsuarioSendoEditado, setOpenModalEdicao, setIndiceDeEdicao, setPossivelEditar }) {

  useEffect(() => {
    if (valorFiltro.current <= 0) {
      setListagemUsuarios(users);
    }
  }, [setListagemUsuarios, valorFiltro])


  const handleMostraOpcaoDeExcluir = (indice) => {
    if (possivelExcluir) {
      listagemUsuarios.splice(indice, 1);
      setListagemUsuarios(
        listagemUsuarios.filter(function filterByID(obj) {
          if ("id" in obj && obj.id !== indice) {
            return true;
          } else {
            return false;
          }
        })
      )
    }
    if (possivelEditar) {
      var usuarioEdicao = listagemUsuarios[indice];
      setUsuarioSendoEditado(usuarioEdicao);
      setOpenModalEdicao(true);
      setIndiceDeEdicao(indice)
      setPossivelEditar(true);
    }
  }

  const handleMudarClasseDaLinha = () => {
    if (possivelExcluir) {
      return 'possivel-excluir-essa-linha'
    }
    if (possivelEditar) {
      return 'possivel-editar-essa-linha'
    }
  }



  return (
    <div>
      <TableContainer component={Paper} className='table-container' >
        <Table sx={{ minWidth: 200 }} aria-label="customized table " stickyHeader size='medium'>
          <TableHead>
            <TableRow>
              <StyledTableCell className='classe-id-tabela'>ID</StyledTableCell>
              <StyledTableCell align="right">Nome</StyledTableCell>
              <StyledTableCell align="right">Username</StyledTableCell>
              <StyledTableCell align="right">E-mail</StyledTableCell>
              <StyledTableCell align="right">Telefone</StyledTableCell>
              <StyledTableCell align="right">Cidade</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listagemUsuarios.map((user, index) => {
              return (
                <StyledTableRow key={index} onClick={() => handleMostraOpcaoDeExcluir(index)} className={handleMudarClasseDaLinha()}>
                  <StyledTableCell indexlinha={index} className='classe-id-tabela' >{user.id}</StyledTableCell>
                  <StyledTableCell align="right">{user.name}</StyledTableCell>
                  <StyledTableCell align="right">{user.username}</StyledTableCell>
                  <StyledTableCell align="right">{user.email}</StyledTableCell>
                  <StyledTableCell align="right">{user.phone}</StyledTableCell>
                  <StyledTableCell align="right">{user.address.city}</StyledTableCell>
                </StyledTableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
