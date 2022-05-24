import React, { useState } from 'react';
import { MdOutlineClear } from 'react-icons/md';
import Alert from '@mui/material/Alert';
import users from '../../../../arrayUsers.json';
import './styles.css';

function FiltroUsuario({ props }) {

  const setListagemUsuarios = props.setListagemUsuarios;
  const listagemUsuarios = props.listagemUsuarios;
  const valorFiltro = props.valorFiltro;
  const [temValorNoFiltro, setTemValorNoFiltro] = useState(false);
  const [abrirAlertaSucesso, setAbrirAlertaSucesso] = useState(false);
  const [abrirAlertaAtencao, setAbrirAlertaAtencao] = useState(false);
  const [totalUsuariosRetornado, setTotalUsuariosRetornado] = useState('');

  const handleFazerFiltro = () => {
    if (valorFiltro.current.length > 0) {
      var usuariosFiltrados = listagemUsuarios.filter(function filterByID(obj) {
        if ('name' in obj && obj.name.toLowerCase().includes(valorFiltro.current.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      })
      setListagemUsuarios(usuariosFiltrados);
      handleEscolherQualMensagemDeAlerta(usuariosFiltrados);
      setTemValorNoFiltro(true);
    } else {
      setListagemUsuarios(users);
      setTemValorNoFiltro(false);
    }
  }

  const handleCancelarEventoEnvio = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleFazerFiltro();
    }
  }

  const handleLimparFiltroExistente = () => {
    setListagemUsuarios(users);
    valorFiltro.current = '';
    setTemValorNoFiltro(false);
    document.getElementById('input-filtro').value = '';
  }

  const handleEscolherQualMensagemDeAlerta = (quantidadeUsuarios) => {
    if (quantidadeUsuarios.length > 0) {
      setAbrirAlertaSucesso(true);
      setTotalUsuariosRetornado(quantidadeUsuarios.length);
      setTimeout(() => {
        setAbrirAlertaSucesso(false);

      }, 4000);
    } else {
      setAbrirAlertaAtencao(true);
      setTimeout(() => {
        setAbrirAlertaAtencao(false);

      }, 4000);
    }
  }
  const alertaAtencao = () => {
    if (abrirAlertaAtencao) {
      return (
        < Alert severity="warning" variant="filled" color="" sx={{ position: 'fixed', top: '9vh', right: '5vw' }}>
          Nenhum usuário encontrado.
        </Alert >
      )
    } 
  }
  const alertaSucesso = () => {
    if (abrirAlertaSucesso) {
        return (
          <Alert severity="success" variant="filled" sx={{ position: 'fixed', top: '9vh', right: '5vw' }}>
            {totalUsuariosRetornado} usuários encontrados.
          </Alert>
        )
    } 
  }

  return (
    <div className="container-fluid div-filtro-usuario">
      <form className="d-flex">
        <input className="form-control me-1" type="search" placeholder="Buscar nome" id='input-filtro' maxLength={20} onChange={(e) => { valorFiltro.current = e.target.value }} onKeyDown={handleCancelarEventoEnvio} />
        <button className="btn btn-outline-success me-3" type="button" onClick={handleFazerFiltro}>Search</button>
        {temValorNoFiltro ?
          <button type="button" className="btn btn-secondary me-3 d-flex position-relative botao-nome-filtro" onClick={handleLimparFiltroExistente}>
            {valorFiltro.current}  <MdOutlineClear className='position-absolute top-0 end-0' />
          </button>
          :
          null
        }
        {alertaAtencao()} 
        {alertaSucesso()} 
      </form>
    </div >
  );
}

export default FiltroUsuario;