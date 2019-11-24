import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import ConnectionsCounter from './ConnectionsCounter';
import MainNav from './MainNav';
import AddTweetForm from './AddTweetForm';
import MyTweets from './MyTweets';
import TweetsterFeed from './TweetsterFeed';

class Profile extends Component {
  // Temporary hardcoded state until pulling from database
  state = {
    communityTweets: [
      {
        message: "Check out this stuff!",
        id: 1,
        userId: 2
      },
      {
        message: "Look what I had for lunch!",
        id: 2,
        userId: 2
      }
    ]
  };


  render() {
    return (
      <div className="App">
        <Header />
        <MainNav />
        <AddTweetForm />
        <div className="main">
          <MyTweets />
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
