import React, { useState, useRef } from 'react';
import Card from './Card';
import Nav from './Nav';
import './styles.css'
import Footer from "./Footer";


function Dashboard() {

  const [listagemUsuarios, setListagemUsuarios] = useState([]);
  const valorFiltro = useRef('');
  return ( 
    <div className='div-dashboard'>
      <Nav
      listagemUsuarios={listagemUsuarios}
      setListagemUsuarios={setListagemUsuarios}
      valorFiltro={valorFiltro}
      />
      <Card 
      listagemUsuarios={listagemUsuarios}
      setListagemUsuarios={setListagemUsuarios}
      valorFiltro={valorFiltro}
      />
      <Footer/>
    </div>
   );
}

export default Dashboard;