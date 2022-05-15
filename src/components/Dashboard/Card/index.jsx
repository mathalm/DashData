import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabContext, TabPanel } from '@mui/lab';
import TabelaPessoas from './Pessoas';
import CadastroUsuarios from './CadastroUsuario';
import './styles.css'
import Graficos from './Gráficos';
import BotaoOpcoes from './BotaoOpcoes';
import EditarUsuario from './EditarUsuario';
import DeletarUsuario from './DeletarUsuario';

export default function Card({  listagemUsuarios, setListagemUsuarios, valorFiltro }) {
  const [value, setValue] = React.useState('one');
  const [reload, setReload] = React.useState(false);
  const [aparecerOpcoes, setAparecerOpcoes] = React.useState(false);

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
          <DeletarUsuario aparecerOpcoes={aparecerOpcoes}/>
          <EditarUsuario aparecerOpcoes={aparecerOpcoes} />
          <BotaoOpcoes setAparecerOpcoes={setAparecerOpcoes} aparecerOpcoes={aparecerOpcoes}/>
          <CadastroUsuarios setReload={setReload} reload={reload} aparecerOpcoes={aparecerOpcoes} />
          <TabelaPessoas listagemUsuarios={listagemUsuarios}
            setListagemUsuarios={setListagemUsuarios} 
            valorFiltro={valorFiltro}
            />
        </TabPanel>
        <TabPanel value="two" index={1}>
          <Graficos listagemUsuarios={listagemUsuarios}/>
        </TabPanel>
      </TabContext>
    </div>
  );
}