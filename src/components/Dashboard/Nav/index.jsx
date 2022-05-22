import React from 'react';
import './styles.css';

function Nav({ setListagemUsuarios, valorFiltro }) {



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
        </div>
      </div >
    </nav >
  );
}

export default Nav;