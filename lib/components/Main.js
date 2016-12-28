import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NumberInput from './NumberInput';
import Footer from './Footer';
import MinMax from './MinMax';
import helperFunctions, { generateRandomNum } from './helperFunctions.js';
import LatestGuess from './LatestGuess';


export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      randomNum: '',
      guess: null,
      minNum: 1,
      maxNum: 100,
    }
  }

  componentDidMount() {
    this.setState({ randomNum: generateRandomNum() })
  }

  submitGuess(e) {
    this.setState({ guess: parseFloat(e) });
  }

  render() {
    return(
      <div>

        <div className='header'>
          <h1 id='number'>Number</h1>
          <h1 id='guesser'>Guesser</h1>
        </div>

        <h3>Guess a number between {this.state.minNum} and {this.state.maxNum}</h3>
        <NumberInput handleClick={this.submitGuess.bind(this)}/>
        {(this.state.guess)
          ?
          <LatestGuess state={this.state}/>
          :
          <p></p>
        }

      </div>
    )
  }
}
