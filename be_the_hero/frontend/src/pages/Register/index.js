import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';
import LogoHero from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [city, setCity] =useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();

    const data = {
      name,
      email,
      whatsapp: whatsApp,
      city,
      uf
    };

    try {
      const response = await api.post('ongs', data);
  
      alert(`Seu id de acesso: ${response.data.id}`);
      history.push('/');
    } catch (e) {
      alert('Erro no cadastro, tente novamente.' + e);
    }

  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={LogoHero} alt="Be the hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          <Link className="backlink" to="/">
              <FiArrowLeft size={16} color="#E02041"/>
              Não tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            value={name}
            onChange= {e => setName(e.target.value)} 
            placeholder="Nome da ONG"
          />
          <input 
            value={email}
            onChange= {e => setEmail(e.target.value)}  
            type="email" 
            placeholder="Email" 
          />
          <input 
            value={whatsApp}
            onChange= {e => setWhatsApp(e.target.value)}  
            placeholder="WhatsApp" 
          />
          
          <div className="input-group">
            <input 
              value={city} 
              onChange= {e => setCity(e.target.value)} 
              placeholder="Cidade" 
            />
            <input 
              value={uf} 
              placeholder="UF"
              onChange= {e => setUf(e.target.value)}  
              style={{ width: 80 }} 
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}