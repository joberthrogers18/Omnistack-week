import React, { Component } from 'react';

import './Timeline.css';
import TwitterIcon from '../twitter.svg';

//import the api connection with axios package
import api from '../services/api';

import Tweet from '../components/Tweet';

export default class Timeline extends Component {
  state={
    tweets: [],
    newTweet: '',
  };

  async componentDidMount(){
    const response = await api.get('tweets');

    this.setState({tweets: response.data});

    console.log(response.data);
  }

  handleInputChange = (event) => {
    this.setState({newTweet:  event.target.value});
  }

  handleNewTweet = async (event) => {
    if(event.keyCode !== 13) return; // verify if it is enter press by user (13 is the code of ente)

    const content = this.state.newTweet;
    const author = localStorage.getItem('@GoTwitter:username'); //take user from localStorage

    await api.post('tweets', {content, author});

    this.setState({ newTweet: ''});
  }

  render() {
    return(
      <div className="timeline-wrapper">
        <img height={24} src={TwitterIcon}alt="GoTwitter"/>

        <form>
          <textarea 
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está acontencendo?" />
        </form>

        <ul className="tweet-list">
          {this.state.tweets.map( tweet => (
            <Tweet key={tweet._id} tweet={tweet} />
          ))}
        </ul>
      </div>
    );
  }
}
