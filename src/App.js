import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Search from './components/Search';
import ViewFollowing from './components/ViewFollowing';
import ViewFollowers from './components/ViewFollowers';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ Login } />
          <Route path="/logout" component={ Login } />
          <Route path="/profile" component={ Profile } />
          <Route path="/search" component={ Search } />
          <Route path="/viewFollowing" component={ ViewFollowing } />
          <Route path="/viewFollowers" component={ ViewFollowers } />
      </BrowserRouter>
    );
  }
}

export default App;
