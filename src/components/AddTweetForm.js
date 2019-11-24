import React, { Component } from 'react';
import {tweetService} from "../services/tweet.service";

class AddTweetForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
      submitted: false,
      error: '',
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    console.log('in handleSubmit');
    this.setState({ submitted: true });
    const { message } = this.state;
    console.log('message is ' + message);
    if (!(message)) {
      return;
    }
    console.log('still here');
    const user = localStorage.getItem('user');
    if (user != null) {
      this.setState({ loading: true });
      tweetService.addTweet(JSON.parse(user).id, message)
          .then(
              tweet => {
                  document.location.href = "/profile";
              },
              error => {
                this.setState({ error, loading: false })
              }
          );
    } else {
      return;
    }
  }

  render () {
    const { message, submitted, error } = this.state;
    return (
      <form>
      <div>
        <input className="form-control" id="message" onChange={this.handleChange} placeholder="What's on your mind?"/>
      </div>
        <button type="submit" className="btn btn-primary" onClick={ this.handleClick }>Submit</button>
        { this.state.error && <div className={'alert alert-danger'}>{this.state.error}</div> }
      </form>
    );
  }
}

export default AddTweetForm;
