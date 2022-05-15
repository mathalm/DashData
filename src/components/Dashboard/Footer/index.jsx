import React from 'react';
import './styles.css'
function Footer() {

  var data = new Date();
  var ano = data.getFullYear();
  return ( 
    <footer className='footer-page'>
      <p>© Desenvolvido por <a href="https://github.com/mathalm" target='_blank' rel="noreferrer" >Matheus Almeida</a> {ano}</p>
    </footer>
   );
}

export default Footer;