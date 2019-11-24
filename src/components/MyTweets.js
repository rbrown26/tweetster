import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Tweet from './Tweet';


class MyTweets extends Component {
  state = {
    userTweets: [
      {
        message: "This is my first tweet!",
        id: 1,
        userId: 1
      },
      {
        message: "This is my second tweet!",
        id: 2,
        userId: 1
      },
      {
        message: "This is my third tweet!",
        id: 3,
        userId: 1
      }
    ]
  };


  render() {
    return (
      <div>
        <div>
          <h2> My Tweets </h2>
        </div>
        <div>
          {/* User tweets */}
          {this.state.userTweets.map( (tweet, index) =>
            <Tweet
              message={tweet.message}
              key={tweet.id}
            />
          )}
        </div>
      </div>
    );
  }
}

export default MyTweets;
