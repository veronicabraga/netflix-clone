import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MainMovieSelection from './pages/MainMovieSelection';

import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
        <Main />
      // </div>
    );
  }
}

export default App;
