import React, { Component } from 'react';
import '../App.css';
import Tweet from './Tweet';

class MyTweets extends Component {
  render() {
    const { tweets } = this.props;
    return (
      <div>
        <div>
          <h2> My Tweets </h2>
        </div>
        <div>
          {/* User tweets */}
          {tweets.map( (tweet, index) =>
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
