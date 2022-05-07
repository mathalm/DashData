import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabContext, TabPanel } from '@mui/lab';
import BarChart from '../BarChart/BarChart';
import TabelaPessoas from './Pessoas';
import CadastroUsuarios from './CadastroUsuario';
import './styles.css'

export default function Card({  listagemUsuarios, setListagemUsuarios }) {
  const [value, setValue] = React.useState('one');
  const [reload, setReload] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              <Tab
                value="one"
                label="Pessoas"
              />
              <Tab value="two" label="Gráfico" />
            </Tabs>
          </Box>
        </div>
        <TabPanel value="one" index={0} className='tab-panel'>
          <CadastroUsuarios setReload={setReload} reload={reload} />
          <TabelaPessoas listagemUsuarios={listagemUsuarios}
            setListagemUsuarios={setListagemUsuarios} />
        </TabPanel>
        <TabPanel value="two" index={1}>
          <BarChart  listagemUsuarios={listagemUsuarios}/>
        </TabPanel>
      </TabContext>
    </div>
  );
}