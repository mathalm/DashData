import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabContext, TabPanel } from '@mui/lab';
import TabelaPessoas from './Pessoas';
import CadastroUsuarios from './CadastroUsuario';
import Graficos from './Gráficos';
import FiltroUsuario from './FiltroUsuarios';
import './styles.css';
import DowloadPlanilha from './DownloadPlanilha';

export default function Card({ listagemUsuarios, setListagemUsuarios }) {
  const [value, setValue] = React.useState('one');
  const [reload, setReload] = React.useState(false);
  const valorFiltro = React.useRef('');


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const props = {
    listagemUsuarios: listagemUsuarios,
    setListagemUsuarios: setListagemUsuarios,
    valorFiltro: valorFiltro,
    setReload: setReload,
    reload: reload
  }

  return (
    <div>
      <TabContext value={value}>
        <div className='div-box'>
          <Box sx={{ width: '100%' }}  >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              <Tab value="one" label="Pessoas" />
              <Tab value="two" label="Gráfico" />
            </Tabs>
          </Box>
        </div>
        <div className='div-filtro'>
          <FiltroUsuario props={props}/>
        </div>
        <TabPanel value="one" index={0} className='tab-panel' >
          <div className='div-cadastro'>
            <CadastroUsuarios props={props} />
            <DowloadPlanilha props={props}/>
          </div>
          <TabelaPessoas props={props} />
        </TabPanel>
        <TabPanel value="two" index={1}>
          <Graficos listagemUsuarios={listagemUsuarios} />
        </TabPanel>
      </TabContext>
    </div>
  );
}