import React, { Component } from 'react';

import './styles.css';
import logo from '../../assets/logo.svg';
import axios from '../../config/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

export default class Main extends Component {

    state = {
        box: ''
    }

    handleChange = (event) => {

        this.setState({ ...this.state, box: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        await axios.post('boxes', {
            title: this.state.box
        }).then((response) => {
            toast.success("Box criado com sucesso");
            console.log(response.data);
        }).catch(error => {
            return toast.error(`Error ao criar um box: ${error}`);
        });

    }

    render() {
        return (
            <div id="main-container">
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt="Logo da rocketbox" />
                    <input
                        placeholder="Criar um box"
                        value={this.state.box}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Criar</button>
                </form>

                <ToastContainer />
            </div>
        );
    }
}
