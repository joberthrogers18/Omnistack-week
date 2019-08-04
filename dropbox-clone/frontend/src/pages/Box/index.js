import React, { Component } from 'react';

import './styles.css';
import logo from '../../assets/logo.svg';
import axios from '../../config/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

import { MdInsertDriveFile } from 'react-icons/md';

export default class Box extends Component {

    state = {
        box: {}
    }

    componentDidMount = async () => {

        await axios.get(`boxes/${this.props.match.params.id}`)
            .then(resp => {
                this.setState({ box: resp.data });
            })
            .catch(error => {
                toast.error(`Erro ao carregar informações sobre a box: ${error}`);
            })
    }

    render() {
        return (
            <div id="box-container" >
                <header>
                    <img src={logo} alt="Logo" />
                    <h1>{this.state.box.title}</h1>
                </header>
                <ul>
                    {
                        this.state.box.files && this.state.box.files.map(file => (
                                <li key={file._id}>
                                    <a className="fileInfo" href={file.url} target="_blank">
                                        <MdInsertDriveFile size={24} color="#A5CFFF" />
                                        <strong>{file.title}</strong>
                                    </a>
                                    <span>{file.createdAt}</span>
                                </li>
                            ))
                    }
                </ul>
                <ToastContainer />
            </div>
        );
    }
}
