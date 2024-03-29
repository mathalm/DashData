import React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { BiPencil } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'
import ModalDeEdicao from './ModalDeEdicao';
import Alert from '@mui/material/Alert';
import './styles.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EditarUsuario({ index, props }) {
  const [open, setOpen] = React.useState(false);
  const [abrirAlertaEdicao, setAbrirAlertaEdicao] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const alertaEdicao = () => {
    if (abrirAlertaEdicao) {
      return (
        < Alert severity="success" variant="filled" color="" sx={{ position: 'absolute', top: '9vh', right: '5vw' }}>
          Usuário editado com sucesso!
        </Alert >
      )
    }
  }

  return (
    <div >
      <div onClick={handleClickOpen} >
        <Tooltip TransitionComponent={Zoom} title="Editar usuário" arrow sx={{ color: '#00c932' }}>
          <IconButton>
            <BiPencil size={22} />
          </IconButton>
        </Tooltip>
      </div>
      <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
        <DialogTitle>Editar usuário</DialogTitle>
        <DialogContent className='modal-lg'>
          <ModalDeEdicao props={props} index={index} setOpen={setOpen} setAbrirAlertaEdicao={setAbrirAlertaEdicao} />
        </DialogContent>
        <DialogActions>
          <GrClose onClick={handleClose} className='botao-cancelar' />
        </DialogActions>
      </Dialog>
      {alertaEdicao()}
    </div>
  );
}

export default EditarUsuario;