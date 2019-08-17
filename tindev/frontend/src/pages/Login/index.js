import React from 'react';
import './styles.css';

import logo from '../../assets/logo.svg';

const Login = () => {
    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="TinDev" />
                <input 
                    placeholder="Digite seu usuário no github"
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Login;

