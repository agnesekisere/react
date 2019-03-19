import React, { Component } from 'react';
import logo from './assets/logo.svg';
import PostList from './components/PostList/PostList';
import UserCard from './components/UserCard/UserCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row col-12">
          <div className="col-9">
            <PostList />
          </div>
          <div className="col-3">
            <UserCard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
