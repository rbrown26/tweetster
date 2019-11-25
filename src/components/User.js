import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class User extends PureComponent {
  static propTypes = {
    addContact: PropTypes.func,
    username: PropTypes.string.isRequired,
    id: PropTypes.number,
  };

  render() {
    const { username, id, addContact } = this.props;
    return (
      <div className="player">
        <span className="player-name">
        <td width="80%">
          { username }
          </td>
          <td>
          <button>Add</button>
          </td>
          <td>
          <button>Remove</button>
          </td>
        </span>
      </div>
    );
  }
}

export default User;
