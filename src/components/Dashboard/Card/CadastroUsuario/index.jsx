import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import AreaCadastro from './AreaCadastro';
import { AiOutlineUserAdd } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './styles.css'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CadastroUsuarios({ setReload, reload, aparecerOpcoes }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className='div-cadastro-usuario'>
      <div onClick={handleClickOpen} className={aparecerOpcoes ? 'div-botao-subir-adicionar' : 'div-botao-descer-adicionar'}>
        <AiOutlineUserAdd size={22} />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        
      >
        <DialogTitle>Criar usuário</DialogTitle>
        <DialogContent className='modal-lg'>
          <AreaCadastro setOpen={setOpen} setReload={setReload} reload={reload} />
        </DialogContent>
        <DialogActions>
          <GrClose onClick={handleClose} className='botao-cancelar ' />
        </DialogActions>
      </Dialog>
    </div>
  );
}