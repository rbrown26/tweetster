import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tweet extends Component {

  static propTypes = {
    message: PropTypes.string
  };

  render () {
    const { message } = this.props;
    return (
      <div>
         { message }
      </div>
    );
  }
}

export default Tweet;
