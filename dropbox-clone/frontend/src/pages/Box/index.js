import React, { Component } from 'react';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt'
import Dropzone from 'react-dropzone';

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
        const id_box = this.props.match.params.id;

        await axios.get(`boxes/${id_box}`)
            .then(resp => {
                this.setState({ box: resp.data });
            })
            .catch(error => {
                toast.error(`Erro ao carregar informações sobre a box: ${error}`);
            })
    }

    handleUpload = (files) => {
        files.forEach(file => {
            //Maneira de enviar arquivos para o backend sem usar um form
            const data = new FormData();
            // la no backend, a label para arquivo é 'file'
            data.append('file', file);

            const id_box = this.props.match.params.id;
            axios.post(`boxes/${id_box}/files`, data)
                .then((result, error) => {
                    if (error) {
                        return toast.success(`Erro: ${error}`);
                    }

                    toast.success("Arquivos carregados com sucesso");
                })
                .catch(error => {
                    toast.success(`Erro: ${error}`);
                })
      })
    }

    render() {
        return (
            <div id="box-container" >
                <header>
                    <img src={logo} alt="Logo" />
                    <h1>{this.state.box.title}</h1>
                </header>

                <Dropzone onDropAccepted={this.handleUpload}>
                    {({ getRootProps, getInputProps }) => (
                        <div className="upload" {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Arraste arquivos ou click</p>
                        </div>
                    )}
                </Dropzone>

                <ul>
                    {
                        this.state.box.files && this.state.box.files.map(file => (
                            <li key={file._id}>
                                <a className="fileInfo" href={file.url} target="_blank" rel="noopener noreferrer">
                                    <MdInsertDriveFile size={24} color="#A5CFFF" />
                                    <strong>{file.title}</strong>
                                </a>
                                <span>há {distanceInWords(file.createdAt, new Date(), {
                                    locale: pt
                                })}</span>
                            </li>
                        ))
                    }
                </ul>
                <ToastContainer />
            </div>
        );
    }
}
