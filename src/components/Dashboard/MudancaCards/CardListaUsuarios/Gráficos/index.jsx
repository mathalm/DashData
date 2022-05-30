import React from 'react';
import BarChart from '../BarChart/BarChart';

function Graficos({listagemUsuarios}) {
  return ( 
    <div>
      <BarChart listagemUsuarios={listagemUsuarios}/>
    </div>
   );
}

export default Graficos;