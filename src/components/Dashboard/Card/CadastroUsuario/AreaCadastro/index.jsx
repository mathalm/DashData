import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import NumberFormat from 'react-number-format';
import user from '../../../../../arrayUsers.json'
import './styles.css'

// formatador do campo Celular
const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(celular) => {
        onChange({
          target: {
            name: props.name,
            value: celular.value,
          },
        });
      }}
      format="+55 (##) #####-####"
      prefix="+"
      type='text'
    />
  );
});
//fim

function AreaCadastro({ setOpen, props, setAbrirAlertaDeCadastro }) {

 
  const setReload = props.setReload;
  const reload = props.reload;

  const [nome, setNome] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [inputVazio, setInputVazio] = useState(true);

  const handleEnvioCadastroUsuario = () => {
    if (nome.length > 3 && userName.length > 3 && email.length > 3 && celular.length > 3) {

      var usuario = {
        "id": Math.floor(Math.random() *243),
        "name": nome,
        "username": userName,
        "email": email,
        "address": {
          "street": rua,
          "suite": numero,
          "city": cidade,
          "zipcode": cep,
          "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
          }
        },
        "phone": celular,
        "website": "noHave.com",
        "company": {
          "name": "Hoeger LLC",
          "catchPhrase": "Centralized empowering task-force",
          "bs": "target end-to-end models"
        }
      }
      user.unshift(usuario);
      setReload(!reload)
      setOpen(false);
      setAbrirAlertaDeCadastro(true);
      setTimeout(() => {
        setAbrirAlertaDeCadastro(false);
        
      }, 4000);
      
    } else {
      setInputVazio(false)
      setTimeout(() => {
        setInputVazio(true)

      }, 4000);

    }
  }
  

  
  const handleChange = (event) => {
    setCelular(event.target.value);
  };


  return (
    <div>
      <Grid container spacing={2} className='container-area-cadastro'>
        <Grid item xs={6}>
          <TextField
            id="standard-error-helper-text"
            label="Nome"
            variant="standard"
            onChange={(e) => { setNome(e.target.value) }}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-error-helper-text-username"
            label="UserName"
            variant="standard"
            onChange={(e) => { setUserName(e.target.value) }}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-error-helper-text"
            label="E-mail"
            type="email"
            variant="standard"
            onChange={(e) => { setEmail(e.target.value) }}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
        <TextField
            label="Celular"
            value={celular.numberformat}
            id="standard-error-helper-text-celular"
            onChange={handleChange}
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            required
            fullWidth
            variant="standard"
            type='text'
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="standard-error-helper-text"
            label="CEP"
            type="number"
            variant="standard"
            onChange={(e) => { setCep(e.target.value) }}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="standard-error-helper-text"
            label="Cidade"
            variant="standard"
            onChange={(e) => { setCidade(e.target.value) }}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-error-helper-text"
            label="Rua"
            variant="standard"
            onChange={(e) => { setRua(e.target.value) }}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="standard-error-helper-text"
            label="Número"
            type="number"
            variant="standard"
            onChange={(e) => { setNumero(e.target.value) }}
            fullWidth
          />
        </Grid>
      </Grid>
      <div className='div-botao-cadastrar-usuario'>
        <Button onClick={handleEnvioCadastroUsuario}>Enviar
        </Button>
      </div>
      <div className={!inputVazio ? "alert alert-warning alerta" : 'sumir'} role="alert">
        Todos os campos devem ser preenchidos!
      </div>
    </div>
  );
}

export default AreaCadastro;