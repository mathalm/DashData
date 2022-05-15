import React, { useState } from 'react';
import { MdOutlineClear } from 'react-icons/md'
import users from '../../../arrayUsers.json'
import './styles.css';

function Nav({ setListagemUsuarios, valorFiltro }) {

  const [temValorNoFiltro, setTemValorNoFiltro] = useState(false);

  const handleFazerFiltro = () => {

    if (valorFiltro.current.length > 0) {
      var usuariosFiltrados = users.filter(function filterByID(obj) {
        if ('name' in obj && obj.name.includes(valorFiltro.current)) {
          return true;
        } else {
          return false;
        }
      })
      setListagemUsuarios(usuariosFiltrados);
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
  
  const handleLimparFiltroExistente = () =>{
    setListagemUsuarios(users);
    valorFiltro.current = '';
    setTemValorNoFiltro(false);
    document.getElementById('input-filtro').value = '';
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href=".">DashData</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href=".">Home</a>
            </li>
          </ul>
          <form className="d-flex">
            {temValorNoFiltro ?
              <button type="button" className="btn btn-secondary me-3 d-flex position-relative botao-nome-filtro" onClick={handleLimparFiltroExistente}>
                {valorFiltro.current}  <MdOutlineClear className='position-absolute top-0 end-0' />
              </button>
              :
              null
            }
            <input className="form-control me-2" type="search" placeholder="Filtrar" id='input-filtro' onChange={(e) => { valorFiltro.current = e.target.value }} onKeyDown={handleCancelarEventoEnvio} />
            <button className="btn btn-outline-success" type="button" onClick={handleFazerFiltro}>Search</button>
          </form>
        </div>
      </div >
    </nav >
  );
}

export default Nav;