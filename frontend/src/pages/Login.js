import React, { Component } from 'react';

import './Login.css';
import TwitterIcon from '../twitter.svg'   

export default class Login extends Component {
    //variable store inside the component react
    state = {
        username: '',
    };

    handleInputChange = event => {
        this.setState({username: event.target.value}); //update info in state
    }

    handleSubmit = event => {
        event.preventDefault(); //avoid the pattern behavious in form (post, get), redirect page

        const {username} = this.state;

        if(!username.length)return;

        localStorage.setItem('@GoTwitter:username', username); //Save the storage browser and save info there

        this.props.history.push('/timeline'); //redirect
    }

    // onChange is a event in input, witch execute every time when is update
  render() {
    return(
        <div className="login-wrapper">
            <img src={TwitterIcon} alt="Go twitter"/>
            <form onSubmit = {this.handleSubmit}>
                <input 
                    value={this.state.username}
                    onChange = {this.handleInputChange}
                    placeholder="Nome de usuário"/>
                <button type="submit" >Entrar</button>
            </form>
        </div>
    );
  }
}
