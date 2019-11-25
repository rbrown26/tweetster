import React, { Component } from 'react';
import '../App.css';
import Tweet from './Tweet';

class TweetsterFeed extends Component {

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
      <div>
        <div>
          <h2>Tweetster Feed</h2>
        </div>
        <div>
          {/* Community tweets */}
          {this.state.communityTweets.map( (tweet, index) =>
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

export default TweetsterFeed;
