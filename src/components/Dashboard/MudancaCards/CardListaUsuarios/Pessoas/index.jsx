import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeletarUsuario from './DeletarUsuario'
import EditarUsuario from './EditarUsuarios';
import arraySort from 'array-sort'
import { RiArrowUpDownFill } from 'react-icons/ri'
import users from '../../../../../arrayUsers.json'
import './styles.css'

//dependencia do material UI
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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
//fim

export default function TabelaPessoas({ props }) {

  const [colunaOrdenada, setColunaOrdenada] = useState('');
  const listagemUsuarios = props.listagemUsuarios;
  const setListagemUsuarios = props.setListagemUsuarios;
  const valorFiltro = props.valorFiltro.current;
  const setReload = props.setReload;
  const reload = props.reload;

  useEffect(() => {
    if (valorFiltro <= 0) {
      setListagemUsuarios(
        arraySort(users, 'name')
      )

    }
  }, [setListagemUsuarios, valorFiltro])

  const handleOrdernarColuna = (nomeDaColuna) => {
    setColunaOrdenada(nomeDaColuna);
    if (nomeDaColuna !== colunaOrdenada) {
      switch (nomeDaColuna) {
        case 'name':
          setListagemUsuarios(arraySort(listagemUsuarios, 'name'))
          break;
        case 'username':
          setListagemUsuarios(arraySort(listagemUsuarios, 'username'))
          break;
        case 'email':
          setListagemUsuarios(arraySort(listagemUsuarios, 'email'))
          break;
        default:
          break;
      }
    } else {
      switch (nomeDaColuna) {
        case 'name':
          setListagemUsuarios(arraySort(listagemUsuarios, 'name', { reverse: true }))
          break;
        case 'username':
          setListagemUsuarios(arraySort(listagemUsuarios, 'username', { reverse: true }))
          break;
        case 'email':
          setListagemUsuarios(arraySort(listagemUsuarios, 'email', { reverse: true }))
          break;
        default:
          break;
      }
    }
    setReload(!reload)
  };

  const handleFormatarCelular = (phone) => {
    // adicionar máscara como (##) #####-####
    const numeroFormatado = `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7, phone.length)}`;
    return (
      numeroFormatado
    )
  }

  return (
    <div>
      <TableContainer component={Paper} className='table-container' >
        <Table sx={{ minWidth: 200 }} aria-label="customized table " stickyHeader size='medium'>
          <TableHead>
            <TableRow>
              <StyledTableCell className='titulo-coluna' align="center" onClick={() => handleOrdernarColuna('name')}>Nome <RiArrowUpDownFill /></StyledTableCell>
              <StyledTableCell className='titulo-coluna' align="center" onClick={() => handleOrdernarColuna('username')}>Username <RiArrowUpDownFill /></StyledTableCell>
              <StyledTableCell className='titulo-coluna' align="center" onClick={() => handleOrdernarColuna('email')}>E-mail <RiArrowUpDownFill /></StyledTableCell>
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
                  <StyledTableCell align="center">{handleFormatarCelular(user.phone)}</StyledTableCell>
                  <StyledTableCell align="center">{user.address.city}</StyledTableCell>
                  <StyledTableCell align="center">
                    <div className='acoes-tabela-usuario'>
                      <EditarUsuario index={index} props={props} />
                      <DeletarUsuario index={index} props={props} />
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
