import React, { Component } from 'react';

import './Timeline.css';
import TwitterIcon from '../twitter.svg';

//socket.io from part of client
import socket from 'socket.io-client';

//import the api connection with axios package
import api from '../services/api';

import Tweet from '../components/Tweet';

export default class Timeline extends Component {
  state={
    tweets: [],
    newTweet: '',
  };

  async componentDidMount(){
    this.subscribeToEvents();

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

  subscribeToEvents = () => { //function to encapsulate the real time part comes to api  
    const io = socket('http://localhost:8081')

    io.on('tweet', data => {
      this.setState({tweets : [data, ...this.state.tweets]}); // adding the tweet in start of  array and use spread to add the old
    });

    io.on('like', data => {
      this.setState({tweets: this.state.tweets.map(tweet => 
        tweet._id === data._id ? data : tweet  // anothe notation from "if"
      )});
    });
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
