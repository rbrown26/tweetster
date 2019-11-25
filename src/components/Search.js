import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import ConnectionsCounter from './ConnectionsCounter';
import MainNav from './MainNav';
import AddTweetForm from './AddTweetForm';
import MyTweets from './MyTweets';
import TweetsterFeed from './TweetsterFeed';
import {tweetService} from "../services/tweet.service";
import SubNav from './SubNav';
import User from './User';

class Search extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    const user = localStorage.getItem('user');
    if (user != null) {
      console.log(user);
      var userId = JSON.parse(user).id;

      fetch('https://polar-everglades-29406.herokuapp.com/users/' + userId)
      //fetch('http://localhost:8080/users/' + userId)
        .then(response => response.json())
        .then((data) => {
          this.setState({
            users: data.map(user => ({
              id: user.id,
              username: user.username
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
        <div className="main">
          <table align="center">
          <tr>
          <td>
            {this.state.users.map( (user, index) =>
              <User
                username={user.username}
                id={user.id}
                key={user.id.toString()}
              />
            )}
            </td>
            </tr>
            </table>
        </div>
      </div>
    );
  }
}

export default Search;
