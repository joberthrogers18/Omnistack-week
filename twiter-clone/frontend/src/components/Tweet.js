import React, { Component } from 'react';

import './Tweet.css';
import like from '../like.svg';
import api from '../services/api';

// import { Container } from './styles';

export default class Tweet extends Component {

    handleLike = async(event) => {
       const {_id} = this.props.tweet;

       await api.post(`/likes/${_id}`);
    }

  // this.props.tweets comes to timeline pass in <Tweet> tag by params 
  render() {
    const {tweet} = this.props;

    return (
        <li className="tweet">
            <strong>{tweet.author}</strong>
            <p>{tweet.content}</p>
            <button type="button" onClick={this.handleLike} >
                <img src={like} alt="Like"/>
                {tweet.likes}
             </button>
        </li>
    ); 
  }
}
