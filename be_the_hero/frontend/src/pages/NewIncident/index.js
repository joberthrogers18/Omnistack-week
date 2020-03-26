import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import Logo from '../../assets/logo.svg';

export default function NewIncident() {
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

        <form>
          <input placeholder="Título do caso"/>
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em reais" />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}