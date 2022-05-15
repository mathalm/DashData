import React from 'react';
import { BiPencil} from 'react-icons/bi'
import './styles.css'

function EditarUsuario({aparecerOpcoes}) {

  const handleApareceOpcaoDeEdicao = () =>{
    
  }
  return ( 
    <div onClick={handleApareceOpcaoDeEdicao}>
      <div className={aparecerOpcoes ? 'div-botao-subir-edicao' : 'div-botao-descer-edicao'}>
      <BiPencil size={22}/>
      </div>
    </div>
   );
}

export default EditarUsuario;