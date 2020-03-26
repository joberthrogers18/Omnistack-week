import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import herosImage from '../../assets/heroes.png';
import logoHeroes from '../../assets/logo.svg'

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await api.post('login', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');
    } catch(e) {
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoHeroes} alt="Be the Hero"/>
        
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            value={id}
            onChange={e => setId(e.target.value)} 
            placeholder="Sua id"
          />
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