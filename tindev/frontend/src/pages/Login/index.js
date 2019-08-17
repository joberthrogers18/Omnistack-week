import React, { useState } from 'react';
import './styles.css';
import axios from 'axios';

import logo from '../../assets/logo.svg';

import api from '../../services/api';

const Login = (props) => {

    const [username, setUsername] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await api.post(  '/devs', {
            username,
        });

        const { _id } = response.data; 

        props.history.push(`/dev/${_id}`);  
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="TinDev" />
                <input 
                    placeholder="Digite seu usuário no github"
                    value={username}
                    onChange={e => {setUsername(e.target.value)}}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Login;

