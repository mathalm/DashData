import React from 'react';
import { BiTrash } from 'react-icons/bi'
import './styles.css'

function DeletarUsuario({ aparecerOpcoes, possivelExcluir, setPossivelExcluir, setPossivelEditar, possivelEditar }) {

  const handleApareceOpcaoDeEdicao = () => {
    setPossivelExcluir(!possivelExcluir);
    setPossivelEditar(false);
  }

  const handleMudarClasse =() =>{
    if(aparecerOpcoes){
      if(possivelExcluir){
        return 'div-botao-subir-deletar-possivel-excluir'
      }else{
        return 'div-botao-subir-deletar'
      }
    }else{
      return 'div-botao-descer-deletar'
    }
    
  }

  return (
    <div onClick={handleApareceOpcaoDeEdicao} className={possivelExcluir ? 'possivel-excluir' : null}>
      <div className={handleMudarClasse()}>
        <BiTrash size={22} />
      </div>
    </div>
  );
}

export default DeletarUsuario;