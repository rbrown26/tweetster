import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {connectionService} from "../services/connection.service";

class User extends PureComponent {
  static propTypes = {
    username: PropTypes.string.isRequired,
    id: PropTypes.string,
    status: PropTypes.string
  };

  handleAddContact(id) {
    console.log('in handleAddContact');
    console.log('id is: ' + id);
    const user = localStorage.getItem('user');
    if (user != null) {
      var userId = JSON.parse(user).id;
      console.log("userId is: " + userId);
      connectionService.addContact(id, userId);
    } else {
      return;
    }
  }

  handleDeleteContact(id) {
    console.log('in handleDeleteContact');
    const user = localStorage.getItem('user');
    if (user != null) {
      var userId = JSON.parse(user).id;
      connectionService.deleteContact(id, userId);
    } else {
      return;
    }
  }

  render() {
    const { username, id, status } = this.props;
    console.log('id is: ' + id);
    let addDisabled = true;
    let deleteDisabled = true;
    if (status === "viewFollowing") {
      deleteDisabled = false;
    } else if (status === "findContacts") {
      addDisabled = false;
      deleteDisabled = true;
    }
    
    return (
      <table>
        <tbody>
          <tr>
            <td width="80%">
              { username }
            </td>
            <td>
              <button disabled={addDisabled} onClick={() => {this.handleAddContact(id)}}>Add</button>
            </td>
            <td>
              <button disabled={deleteDisabled} onClick={() => {this.handleDeleteContact(id)}}>Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default User;
