import React, { useState } from 'react';
import Card from './Card';
import Nav from './Nav';
import './styles.css'

function Dashboard() {

  const [listagemUsuarios, setListagemUsuarios] = useState([]);
  return ( 
    <div className='div-dashboard'>
      <Nav
      listagemUsuarios={listagemUsuarios}
      setListagemUsuarios={setListagemUsuarios}
      />
      <Card 
      listagemUsuarios={listagemUsuarios}
      setListagemUsuarios={setListagemUsuarios}
      />
    </div>
   );
}

export default Dashboard;