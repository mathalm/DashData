import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import AreaCadastro from './AreaCadastro';
import { AiOutlineUserAdd } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import './styles.css'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CadastroUsuarios({  props }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className='div-cadastro-usuario'>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle>Criar usuário</DialogTitle>
        <DialogContent className='modal-lg'>
          <AreaCadastro setOpen={setOpen} props={props}/>
        </DialogContent>
        <DialogActions>
          <GrClose onClick={handleClose} className='botao-cancelar ' />
        </DialogActions>
      </Dialog>
      <div onClick={handleClickOpen}>
        <Tooltip TransitionComponent={Zoom} title="Cadastrar usuário" arrow className='tooltip-cadastro-usuario' >
          <IconButton >
            <AiOutlineUserAdd size={22} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}