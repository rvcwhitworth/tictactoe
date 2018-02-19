import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Tic Tac Toe </h1>
        </header>
        <Grid />
      </div>
    );
  }
}

export default App;
