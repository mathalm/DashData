import React from 'react';
import { BiPlus } from 'react-icons/bi';
import './styles.css';

function BotaoOpcoes({ aparecerOpcoes, setAparecerOpcoes }) {
  const handleAparecerOpcoes = () => {
    setAparecerOpcoes(!aparecerOpcoes);
  }
  return (
    <div className='div-engloba-canto-opcoes' onClick={handleAparecerOpcoes} >
      <div className='div-botao-mostrar-opcoes'>
        <BiPlus size={35}/>
      </div>
    </div>
  );
}

export default BotaoOpcoes;