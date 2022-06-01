import React, { useState } from 'react';
import Nav from './Nav';
import Footer from "./Footer";
import MudancaCards from './MudancaCards';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { Helmet } from "react-helmet";
import './styles.css'

function Dashboard() {

  const [listagemUsuarios, setListagemUsuarios] = useState([]);
  const [aparecerLoad, setAparecerLoad] = useState(true);

  const pagCarregada = () => {
    setTimeout(() => {
      setAparecerLoad(false)
    }, 3000);
  }

  window.onload = pagCarregada();

  return (
    <div className='div-dashboard'>
      <Nav />
      <MudancaCards
        listagemUsuarios={listagemUsuarios}
        setListagemUsuarios={setListagemUsuarios}
      />
      <Footer />
      {
        aparecerLoad ?
          <div className='div-progresso'>
            <Box>
              <LinearProgress sx={{ height: 7, }} />
            </Box>
          </div>
          :
          null
      }
      <Helmet>
        <meta charSet="utf-8" />
        <title>DashData</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/1828/1828673.png" />
      </Helmet>
    </div>

  );
}

export default Dashboard;