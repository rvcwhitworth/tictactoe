import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridItem from './GridItem';

export default class Grid extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentMove: 'X',
      grid: [[],[],[]],
    }
    this.state.grid = this.state.grid.map((row) => [0, 0, 0]);
  }

  render() {
    return (
      <div className="Grid">
        {this.state.grid.map((row, i) => {
          return (
            <div className="row">
              {row.map((column, j) => {
                return <GridItem key={i + ',' + j} currentMove={this.state.currentMove} />
              })}
            </div>
          );
        })}
      </div>
    );
  }
}