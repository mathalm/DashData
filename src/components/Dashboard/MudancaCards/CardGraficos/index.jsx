import React from 'react';
import BarChart from './BarChart/BarChart';
import GraficoUsuariosCidade from './GraficoUsuariosCidade/BarChart'
import './styles.css'

function GraficosUsuarios({props}) {

  return ( 
    <div className='div-graficos'>
      <GraficoUsuariosCidade props={props}/>
      <BarChart props={props}/>
    </div>
   );
}

export default GraficosUsuarios;