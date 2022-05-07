import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import AreaCadastro from './AreaCadastro';
import { BiPlus } from 'react-icons/bi'
import './styles.css'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CadastroUsuarios({setReload, reload}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className='div-cadastro-usuario'>
      <Button variant="contained" onClick={handleClickOpen} className='rounded-circle' >
        <BiPlus size={23}/>
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              className='botao-sair-cadastro'
            >
              Sair
            </IconButton>
            <Typography sx={{ ml: 3, flex: 1 }} fontSize='18' component="div" className='typografy-novo-usuario'>
              Novo usuário
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
         <AreaCadastro setOpen={setOpen} setReload={setReload} reload={reload}/>         
        </List>
      </Dialog>
    </div>
  );
}