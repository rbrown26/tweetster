import React from 'react';

const SubNav = () => {
  const user = localStorage.getItem('user');
  let search = "";
  let viewFollowers = "";
  let viewFollowing = "";

  if (user != null) {
    search = <a className="nav-link" isVisible="true" href="/search">Find Contacts</a>;
    viewFollowers = <a className="nav-link" isVisible="true" href="/viewFollowers">View Followers</a>
    viewFollowing = <a className="nav-link" isVisible="true" href="/viewFollowing">View Following</a>
  } else {
    search = <a className="nav-link" isVisible="false" href="/search">Find Contacts</a>;
    viewFollowers = <a className="nav-link" isVisible="false" href="/viewFollowers">View Followers</a>
    viewFollowing = <a className="nav-link" isVisible="false" href="/viewFollowing">View Following</a>
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
        </ul>
    </nav>
  );
}

export default SubNav;
