import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'; 


import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import Header from '../../components/Header';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

import api from '../../services/api';

import './styles.css';

function Landing(){
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(()=> {
    api.get('connections').then((response => {
      const {total} = response.data;

      setTotalConnections(total);
    }))
  }, []);


  return (
    <>

      <div id="page-landing">
      <Header />
        <div id="page-landing-content" className="container">

          <div className="logo-container">
            <img src={logoImg} alt="Proffy"/>
            <h2>Sua plataforma de estudos online.</h2>
          </div>
          <img 
            src={landingImg} 
            alt="Plataforma de estudos" 
            className="hero-image"
          />
        </div>
        <div id="section-down">
          <div className="container-buttons">
            <p>Seja bem-vindo. <span><br />O que deseja fazer?</span></p>
            <div className="buttons-container">
              <span className="total-connections" >
                Total de {totalConnections} conexões ja realizadas 
              </span>

              <div className="buttons-group">
                <Link to="/study" className="study">
                  <img src={studyIcon} alt="Estudar"/>
                  Estudar
                </Link>
                <Link to="give-classes" className="give-classes">
                  <img src={giveClassesIcon} alt="Dar aulas"/>
                  Dar aulas
                </Link>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing;