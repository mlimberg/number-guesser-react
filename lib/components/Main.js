import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NumberInput from './NumberInput';
import Footer from './Footer';
import MinMax from './MinMax';
const $ = require('jQuery');

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      randomNum: '',
    }
  }

  render() {
    return(
      <div>

        <div className='header'>
          <h1 id='number'>Number</h1>
          <h1 id='guesser'>Guesser</h1>
        </div>

        <NumberInput />
        
      </div>
    )
  }
}
