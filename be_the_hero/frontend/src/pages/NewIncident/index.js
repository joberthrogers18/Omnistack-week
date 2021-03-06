import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import Logo from '../../assets/logo.svg';

import api from '../../services/api';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    }

    console.log(data);

    try {
      await api.post('incidents/', data, {
        headers: {
          authorization: ongId
        }
      });

      history.push('/profile');
    } catch (e) {
      alert('Erro ao cadastrar, tente novamente');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={Logo} alt="Be the hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Decreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>
          <Link className="backlink" to="/profile">
              <FiArrowLeft size={16} color="#E02041"/>
              Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input 
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Título do caso"
          />
          <textarea 
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Descrição" 
          />
          <input 
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Valor em reais" 
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}