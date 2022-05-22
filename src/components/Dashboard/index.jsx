import React, { useState } from 'react';
import Card from './Card';
import Nav from './Nav';
import './styles.css'
import Footer from "./Footer";


function Dashboard() {

  const [listagemUsuarios, setListagemUsuarios] = useState([]);
  
  
  return ( 
    <div className='div-dashboard'>
      <Nav/>
      <Card 
      listagemUsuarios={listagemUsuarios}
      setListagemUsuarios={setListagemUsuarios}
      />
      <Footer/>
    </div>
   );
}

export default Dashboard;