import Friends from './Friends';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';;


class App extends Component {
  render() {
    return (
    <div className="App">
      <Route exact path= "/" component={Friends} />
    </div>
    );
  }
}

export default App;
