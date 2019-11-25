import React from 'react';
import PropTypes from 'prop-types';

const ConnectionsCounter = ( { followers, following }) => {
  return (
    <table className="counter">
      <tbody>
        <tr>
          <td>Following:</td>
          <td>{following}</td>
        </tr>
        <tr>
          <td>Followers:</td>
          <td>{followers}</td>
        </tr>
      </tbody>
    </table>
  );
}

ConnectionsCounter.propTypes = {
  followers: PropTypes.number,
  following: PropTypes.number
}
export default ConnectionsCounter;
