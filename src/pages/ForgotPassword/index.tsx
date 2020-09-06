import React from 'react';
import {Link} from 'react-router-dom';

import Input from '../../components/Input';
import backIcon from '../../assets/images/icons/back.svg';


import './styles.css';
import logoImg from '../../assets/images/logo.svg'; 
;


function ForgotPassword(){


  return (
    <div className="content">
      
      <div className="content-form">
        <div className="form">
          <form >
          <Link to="/">
            <img 
              className="arrow-back"
              src={backIcon} 
              alt="Back" 
            />
          </Link>
            
            <h1>Eita, esqueceu sua senha?</h1>
            <p>Não esquenta, vamos dar um jeito nisso</p>
            <Input name="email" type="password" placeholder="E-mail"/>
            
            <button className="button-signin" type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <div className="content-banner"> 
        <div className="content-logo-text">
          <img 
              src={logoImg} 
              alt="Plataforma de estudos" 
            />
          <div className="content-banner-text">
            <p>Sua plataforma de estudos online</p>
          </div>
        </div>
      </div>
    </div>
     
  )
}

export default ForgotPassword;