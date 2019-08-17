import React, { useEffect, useState } from 'react';
import './style.css';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

const Main = ({ match }) => {

    // seria o state, mas a primeira eh a variavel e a segunda a função para atualizar esse estado
    const [devs, setDevs ] = useState([]);

    // React hooks
    useEffect(() => {

        async function loadUsers(){
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id
                }
            })

            setDevs(response.data);
        }

        loadUsers();
    }, [match.params.id])

    const renderDevs = () => {
        return devs.map(dev => (
            <li key={dev._id} >
                <img src={dev.avatar} alt={dev.name}/>
                <footer>
                    <strong>{dev.name}</strong>
                    <p>{dev.bio}</p>
                </footer>

                <div className="buttons">
                    <button type="button">
                        <img src={like} alt="Like"/>
                    </button>
                    <button type="button">
                        <img src={dislike} alt="Dislike"/>
                    </button>
                </div>
            </li>
        ));
    }

    return (
        <div className="main-container" >
            <img src={logo} alt="Tindev" />
            <ul>
                {renderDevs()}
            </ul>
        </div>
    )
}

export default Main;