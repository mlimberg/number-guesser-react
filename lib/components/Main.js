import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NumberInput from './NumberInput';
import Footer from './Footer';
import MinMax from './MinMax';
import helperFunctions, { generateRandomNum, compare } from './helperFunctions.js';
import Guess from './Guess';


export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      randomNum: '',
      guess: '',
    }
  }

  componentDidMount() {
    this.setState({ randomNum: generateRandomNum() })
  }

  submitGuess(e) {
    this.setState({ guess: parseInt(e) });
    // compare(this.state.guess, this.state.randomNum)
    console.log(compare(this.state.guess, this.state.randomNum))
  }

  render() {
    return(
      <div>

        <div className='header'>
          <h1 id='number'>Number</h1>
          <h1 id='guesser'>Guesser</h1>
        </div>

        <NumberInput handleClick={this.submitGuess.bind(this)}/>

        <Guess guess={this.state.guess}/>

      </div>
    )
  }
}
