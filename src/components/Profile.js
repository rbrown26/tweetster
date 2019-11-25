import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import ConnectionsCounter from './ConnectionsCounter';
import MainNav from './MainNav';
import AddTweetForm from './AddTweetForm';
import MyTweets from './MyTweets';
import TweetsterFeed from './TweetsterFeed';
import SubNav from './SubNav';

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

  render() {
    return (
      <div className="App">
        <Header />
        <MainNav />
        <SubNav />
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
