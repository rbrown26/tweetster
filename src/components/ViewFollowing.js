import React, { Component } from 'react';
import Header from './Header.js';
import MainNav from './MainNav';
import SubNav from './SubNav';
import User from './User';

class ViewFollowing extends Component {
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

      fetch('https://polar-everglades-29406.herokuapp.com/connection/' + userId + '/following')
      //fetch('http://localhost:8080/connection/' + userId + '/following')
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
        <SubNav />

        <div className="main">
          {this.state.users.map( (user, index) =>
            <User
              username={user.username}
              id={user.id}
              key={user.id.toString()}
              status='viewFollowing'
            />
          )}
        </div>
        <br/>
        <br/>
        <br/>
        <a href="/profile">Return to Profile</a>
      </div>
    );
  }
}

export default ViewFollowing;
