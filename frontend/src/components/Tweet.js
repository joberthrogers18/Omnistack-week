import React, { Component } from 'react';

import './Tweet.css';
import like from '../like.svg';

// import { Container } from './styles';

export default class Tweet extends Component {

  // this.props.tweets comes to timeline pass in <Tweet> tag by params 
  render() {
    const {tweet} = this.props;

    return (
        <li className="tweet">
            <strong>{tweet.author}</strong>
            <p>{tweet.content}</p>
            <button type="button" >
                <img src={like} alt="Like"/>
                {tweet.likes}
             </button>
        </li>
    ); 
  }
}
