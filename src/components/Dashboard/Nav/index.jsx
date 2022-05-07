import React, { useRef } from 'react';
import users from '../../../arrayUsers.json'

function Nav({ listagemUsuarios, setListagemUsuarios}) {

  const valorFiltro = useRef('');

  const handleFazerFiltro = () =>{
    console.log(listagemUsuarios);
    if(valorFiltro.current.length > 0){
      var usuariosFiltrados = listagemUsuarios.filter(function filterByID(obj) {
        if ('name' in obj && obj.name.includes(valorFiltro.current)) {
          return true;
        } else {
          return false;
        }
      })
      setListagemUsuarios(usuariosFiltrados);
    }else{
      setListagemUsuarios(users);
      console.log('deu ruim');
    }
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
            <input className="form-control me-2" type="search" placeholder="Filtrar" aria-label="Search" id='input-filtro' onChange={(e)=>{valorFiltro.current = e.target.value}} />
            <button className="btn btn-outline-success" type="button" onClick={handleFazerFiltro}>Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;