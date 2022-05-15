import React from 'react';
import { BiPencil } from 'react-icons/bi'
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { GrClose } from 'react-icons/gr'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './styles.css';
import ModalDeEdicao from './ModalDeEdicao';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EditarUsuario({ aparecerOpcoes, possivelEditar, setPossivelEditar, possivelExcluir, setPossivelExcluir, usuarioSendoEditado, openModalEdicao, setOpenModalEdicao,listagemUsuarios,indiceDeEdicao }) {

  const handleClose = () => {
    setOpenModalEdicao(false);
  };

  const handleApareceOpcaoDeEdicao = () => {
    setPossivelEditar(!possivelEditar);
    setPossivelExcluir(false);
  }
  const handleMudarClasseEditar = () => {
    if (aparecerOpcoes) {
      if (possivelEditar) {
        return 'div-botao-subir-edicao-possivel-editar'
      } else {
        return 'div-botao-subir-edicao'
      }
    } else {
      return 'div-botao-descer-edicao'
    }
  }

  return (
    <div >
      <div className={handleMudarClasseEditar()} onClick={handleApareceOpcaoDeEdicao}>
        <BiPencil size={22} />
      </div>
      <Dialog
        open={openModalEdicao}
        onClose={handleClose}
        TransitionComponent={Transition}

      >
        <DialogTitle>Editar usuário</DialogTitle>
        <DialogContent className='modal-lg'>
          <ModalDeEdicao usuarioSendoEditado={usuarioSendoEditado} setOpenModalEdicao={setOpenModalEdicao}
          listagemUsuarios={listagemUsuarios} indiceDeEdicao={indiceDeEdicao} setPossivelEditar={setPossivelEditar}
          />
        </DialogContent>
        <DialogActions>
          <GrClose onClick={() => setOpenModalEdicao(false)} className='botao-cancelar' />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditarUsuario;