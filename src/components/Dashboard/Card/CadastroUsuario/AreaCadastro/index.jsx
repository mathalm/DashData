import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import user from '../../../../../arrayUsers.json'
import './styles.css'
function AreaCadastro({ setOpen, setReload, reload }) {
  const [nome, setNome] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const handleEnvioCadastroUsuario = () => {
    if (nome.length > 3 && userName.length > 3 && email.length > 3 && telefone.length > 3) {

      var usuario = {
        "id": Math.random(),
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
        "phone": telefone,
        "website": "noHave.com",
        "company": {
          "name": "Hoeger LLC",
          "catchPhrase": "Centralized empowering task-force",
          "bs": "target end-to-end models"
        }
      }
      user.unshift(usuario);
      setOpen(false);
      handleReload();
    } else {
      document.alert("Você deve preencher os dados obrigatórios com dados válidos!")
    }
  }
  const handleReload = () =>{
    setReload(!reload);
}
  return (
    <div>
      <Grid container spacing={2} className='container-area-cadastro'>
        <Grid item xs={6}>
          <TextField
            id="standard-error-helper-text"
            label="Nome*"
            variant="standard"
            onChange={(e) => { setNome(e.target.value) }}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-error-helper-text"
            label="UserName*"
            variant="standard"
            onChange={(e) => { setUserName(e.target.value) }}
            fullWidth
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="standard-error-helper-text"
            label="E-mail*"
            type="email"
            variant="standard"
            onChange={(e) => { setEmail(e.target.value) }}
            fullWidth
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="standard-error-helper-text"
            label="Telefone*"
            type="number"
            variant="standard"
            onChange={(e) => { setTelefone(e.target.value) }}
            fullWidth
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
        <Grid item xs={3}>
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
        <Button autoFocus onClick={handleEnvioCadastroUsuario} variant="contained">
          save
        </Button>
      </div>
    </div>
  );
}

export default AreaCadastro;