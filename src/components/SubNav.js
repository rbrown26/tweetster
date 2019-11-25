import React from 'react';

const SubNav = () => {
  const user = localStorage.getItem('user');
  let search = "";
  let viewFollowers = "";
  let viewFollowing = "";
  let returnToProfile = "";

  if (user != null) {
    search = <a className="nav-link" href="/search">Find Contacts</a>;
    viewFollowers = <a className="nav-link" href="/viewFollowers">View Followers</a>
    viewFollowing = <a className="nav-link" href="/viewFollowing">View Following</a>
    returnToProfile = <a className="nav-link" href="/profile">Return to Profile</a>
  }

  return (
    <nav>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                {search}
            </li>
            <li className="nav-item">
                {viewFollowers}
            </li>
            <li className="nav-item">
                {viewFollowing}
            </li>
            <li className="nav-item">
                {returnToProfile}
            </li>
        </ul>
    </nav>
  );
}

export default SubNav;
