import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabContext, TabPanel } from '@mui/lab';
import TabelaPessoas from './Pessoas';
import CadastroUsuarios from './CadastroUsuario';
import Graficos from './Gráficos';
import './styles.css'

export default function Card({ listagemUsuarios, setListagemUsuarios, valorFiltro }) {
  const [value, setValue] = React.useState('one');
  const [reload, setReload] = React.useState(false);



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
        <TabPanel value="one" index={0} className='tab-panel' >
          <CadastroUsuarios props={props}  />
          <TabelaPessoas props={props}  />
        </TabPanel>
        <TabPanel value="two" index={1}>
          <Graficos listagemUsuarios={listagemUsuarios} />
        </TabPanel>
      </TabContext>
    </div>
  );
}