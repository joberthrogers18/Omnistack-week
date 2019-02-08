import React, { Component } from 'react';

import './Login.css';
import TwitterIcon from '../twitter.svg'   

export default class Login extends Component {
  render() {
    return(
        <div className="login-wrapper">
            <img src={TwitterIcon} alt="Go twitter"/>
            <form>
                <input placeholder="Nome de usuário"/>
                <button type="submit" >Entrar</button>
            </form>
        </div>
    );
  }
}
