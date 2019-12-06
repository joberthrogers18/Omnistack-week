import React, { useState } from 'react';
import api from '../../services/configApi';

function Login(props){
    const [email, setEmail] = useState('');

    async function handleSubmit(event){
        event.preventDefault();

        const response = await api.post('/sessions', {
        email
        });

        const { _id } = response.data;

        localStorage.setItem('user', _id);

        if( _id ){
            props.history.push('/dashboard');
        } 
    }

    return (
        <>
            <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong> talentos</strong> para a sua empresa
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input 
                type="email" 
                id="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <button type="submit" className="btn">Entrar</button>
            </form>
        </>
    )

}

export default Login;