import React, { useEffect, useState } from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { CSVLink } from "react-csv";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import './styles.css'

function DowloadPlanilha({ props }) {

  const listagemUsuarios = props.listagemUsuarios;
  const [dataHora, setDataHora] = useState();

  const cabecalhoPlanilha = [
    { label: 'id', key: 'id' },
    { label: 'name', key: 'name' },
    { label: 'username', key: 'username' },
    { label: 'email', key: 'email' },
    { label: 'phone', key: 'phone' },
    { label: 'city', key: 'address.city' },
    { label: 'street', key: 'address.street' },
    { label: 'website', key: 'website' }

  ]
  
  useEffect(() =>{
    const data = new Date();
    setDataHora( `Lista do DashData do dia ${data.getDate()}/${data.getMonth()} ${data.getHours()}:${data.getMinutes()}`);
    console.log(dataHora);
  },[setDataHora, dataHora])

  return (
    <CSVLink data={listagemUsuarios} headers={cabecalhoPlanilha} separator={";"} filename={dataHora}>
      <div className='div-download-lista'>
        <Tooltip TransitionComponent={Zoom} title="Exportar lista" arrow className='tooltip-download-lista'>
          <IconButton >
            <AiOutlineCloudDownload size={22} color='#f0f0f0' />
          </IconButton>
        </Tooltip>
      </div>
    </CSVLink>
  );
}

export default DowloadPlanilha;