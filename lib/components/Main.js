import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NumberInput from './NumberInput';
import Footer from './Footer';
import MinMax from './MinMax';
import helperFunctions, { generateRandomNum } from './helperFunctions.js';
const $ = require('jQuery');

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      randomNum: '',
    }
  }

  componentDidMount() {
    this.setState({ randomNum: generateRandomNum() })
  }

  submitGuess() {
    console.log('')
  }

  render() {
    return(
      <div>

        <div className='header'>
          <h1 id='number'>Number</h1>
          <h1 id='guesser'>Guesser</h1>
        </div>

        <NumberInput handleClick={this.submitGuess.bind(this)}/>

      </div>
    )
  }
}
