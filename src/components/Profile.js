import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import ConnectionsCounter from './ConnectionsCounter';
import MainNav from './MainNav';
import AddTweetForm from './AddTweetForm';
import MyTweets from './MyTweets';
import TweetsterFeed from './TweetsterFeed';
import {tweetService} from "../services/tweet.service";

class Profile extends Component {

  constructor() {
    super();
    this.state = {
      defaultMessage: '',
      myTweets: []
    };
  }

  componentDidMount() {
    const user = localStorage.getItem('user');
    if (user != null) {
      console.log(user);
      var userId = JSON.parse(user).id;

      fetch('https://polar-everglades-29406.herokuapp.com/tweet/' + userId + '/all')
      //fetch('http://localhost:8080/tweet/' + userId + '/all')
        .then(response => response.json())
        .then((data) => {
          this.setState({
            myTweets: data.map(tweet => ({
              message: tweet.message,
              id: tweet.id,
              userId: tweet.createdBy
          }))
        })
      });
    }
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...this.state.players,
          {
            name,
            score: 0,
            isHighScore: false,
            id: this.prevPlayerId += 1
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MainNav />
        <AddTweetForm />
        <div className="main">
          <MyTweets
            tweets={this.state.myTweets}
          />
          <TweetsterFeed />


          <ConnectionsCounter
            following={3}
            followers={2}
          />
        </div>
      </div>
    );
  }
}

export default Profile;
