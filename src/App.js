import React, { Component } from 'react';
import logo from './logo.svg';
import TweetBox from './TweetBox';
import Tweet from './Tweet';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tweets : [
        { text : 'hello world',
          liked : false},
        { text : 'coder school is shit ',
          liked : true}]
    }
  }

  handleTweet(tweet) {
    let tweetObj = {
      text : tweet,
      liked : false,
    }
    this.setState({
      tweets: this.state.tweets.concat(tweetObj),
    });
  }

  handleLike(tweet) {
    let tweets =  this.state.tweets.map( (t) => {
      if(t.text == tweet.text){
        return {
          text:t.text,
          liked: !t.liked,
        }
      }
      return t;
    })
    
    this.setState({
      tweets : tweets,
    })
  }

  handleDelete(tweet) {
    
    let index = this.state.tweets.map( (t) => {return t.text}).indexOf(tweet.text);
    console.log("handle delete twweet " + index);
    let tweets = this.state.tweets;
    if(index != -1)
      this.state.tweets.splice(index,1);
    this.setState({
      tweets : tweets,
    })

      
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CoderSchoold Prework</h1>
        </header>
        <div>
            <TweetBox promt="what is your status" onTweet={this.handleTweet.bind(this)}/>
        </div>
        <div>
          {
            this.state.tweets.map( tweet =>
              <Tweet tweet={tweet} handleLike={this.handleLike.bind(this)}
              handleDelete={this.handleDelete.bind(this)}/> )
          }
        </div>
      </div>
    );
  }
}

export default App;
