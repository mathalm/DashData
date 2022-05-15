import React from 'react';
import { BiTrash} from 'react-icons/bi'
import './styles.css'

function DeletarUsuario({aparecerOpcoes}) {

  const handleApareceOpcaoDeEdicao = () =>{
    
  }
  return ( 
    <div onClick={handleApareceOpcaoDeEdicao}>
      <div className={aparecerOpcoes ? 'div-botao-subir-deletar' : 'div-botao-descer-deletar'}>
      <BiTrash size={22}/>
      </div>
    </div>
   );
}

export default DeletarUsuario;