import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ConnectionsCounter extends Component {
  constructor() {
    super();

    this.state = {
      following: '',
      followers: ''
    };
  }

  componentDidMount() {
    const user = localStorage.getItem('user');
    if (user != null) {
      console.log(user);
      var userId = JSON.parse(user).id;

      fetch('https://polar-everglades-29406.herokuapp.com/connection/' + userId + '/following/count')
      //fetch('http://localhost:8080/connection/' + userId + '/following/count')
        .then(response => response.json())
        .then((data) => {
          this.setState({ following: data })
        });

      fetch('https://polar-everglades-29406.herokuapp.com/connection/' + userId + '/followers/count')
      //fetch('http://localhost:8080/connection/' + userId + '/followers/count')
        .then(response => response.json())
        .then((data) => {
          this.setState({ followers: data })
        });
    }
  }

  render() {
    return (
      <table className="counter">
        <tbody>
          <tr>
            <td>Followers:</td>
            <td>{this.state.followers}</td>
          </tr>
          <tr>
            <td>Following:</td>
            <td>{this.state.following}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ConnectionsCounter;
