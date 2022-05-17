import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './styles.css'
function ModalDeEdicao({ usuarioSendoEditado, setOpenModalEdicao, listagemUsuarios,indiceDeEdicao, setPossivelEditar }) {
  const [nome, setNome] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [rua, setRua] = useState('');
  const [complemento, setComplemento] = useState('');
  const [inputVazio, setInputVazio] = useState(true);

  const handleEnvioCadastroUsuario = (e) => {
    e.preventDefault()
    if (nome.length > 3 && userName.length > 3 && email.length > 3 && celular.length > 3) {

      var usuario = {
        "id": usuarioSendoEditado.id,
        "name": nome,
        "username": userName,
        "email": email,
        "address": {
          "street": rua,
          "suite": complemento,
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
      listagemUsuarios[indiceDeEdicao] = usuario;
      setOpenModalEdicao(false);
    } else {
      setInputVazio(false)
      setTimeout(() => {
        setInputVazio(true);

      }, 4000);

    }
  }
  useEffect(() =>{
    setNome(document.getElementById('standard-error-helper-text-nome').value);
    setUserName(document.getElementById('standard-error-helper-text-username').value);
    setEmail(document.getElementById('standard-error-helper-text-email').value);
    setCelular(document.getElementById('standard-error-helper-text-celular').value);
    setCep(document.getElementById('standard-error-helper-text-cep').value);
    setCidade(document.getElementById('standard-error-helper-text-cidade').value);
    setRua(document.getElementById('standard-error-helper-text-rua').value);
    setComplemento(document.getElementById('standard-error-helper-text-complemento').value);
  },[usuarioSendoEditado]);

  return (
    <div>
      <Grid container spacing={2} className='container-area-cadastro'>
        <Grid item xs={6}>
          <TextField
            id="standard-error-helper-text-nome"
            label="Nome"
            variant="standard"
            defaultValue={usuarioSendoEditado.name}
            onChange={(e) => { setNome(e.target.value)}}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-error-helper-text-username"
            label="UserName"
            variant="standard"
            onChange={(e) => { setUserName(e.target.value) }}
            defaultValue={usuarioSendoEditado.username}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-error-helper-text-email"
            label="E-mail"
            type="email"
            variant="standard"
            onChange={(e) => { setEmail(e.target.value) }}
            defaultValue={usuarioSendoEditado.email}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-error-helper-text-celular"
            label="Celular"
            type="number"
            variant="standard"
            onChange={(e) => { setCelular(e.target.value) }}
            defaultValue={usuarioSendoEditado.phone}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="standard-error-helper-text-cep"
            label="CEP"
            type="number"
            variant="standard"
            onChange={(e) => { setCep(e.target.value) }}
            defaultValue={usuarioSendoEditado.address.zipcode}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="standard-error-helper-text-cidade"
            label="Cidade"
            variant="standard"
            onChange={(e) => { setCidade(e.target.value) }}
            defaultValue={usuarioSendoEditado.address.city}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-error-helper-text-rua"
            label="Rua"
            variant="standard"
            onChange={(e) => { setRua(e.target.value) }}
            defaultValue={usuarioSendoEditado.address.street}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="standard-error-helper-text-complemento"
            label="Complemento"
            type="text"
            variant="standard"
            onChange={(e) => { setComplemento(e.target.value) }}
            defaultValue={usuarioSendoEditado.address.suite}
            fullWidth
          />
        </Grid>
      </Grid>
      <div className='div-botao-cadastrar-usuario'>
        <Button onClick={handleEnvioCadastroUsuario}>Salvar
        </Button>
      </div>
      <div className={!inputVazio ? "alert alert-warning alerta" : 'sumir'} role="alert">
        Todos os campos devem ser preenchidos!
      </div>
    </div>
  );
}

export default ModalDeEdicao;