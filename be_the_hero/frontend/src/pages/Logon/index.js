import React from 'react';
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import herosImage from '../../assets/heroes.png';
import logoHeroes from '../../assets/logo.svg'

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoHeroes} alt="Be the Hero"/>
        
        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua id"/>
          <button className="button" type="submit">Entrar</button>
          <Link className="backlink" to="/register">
              <FiLogIn size={16} color="#E02041"/>
              Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={herosImage} alt="Heroes"/>
    </div>
  )
}