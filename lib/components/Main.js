import React, { Component } from 'react';
import NumberInput from './NumberInput';
import MinMax from './MinMax';
import helperFunctions, { generateRandomNum } from './helperFunctions.js';
import LatestGuess from './LatestGuess';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      randomNum: '',
      guess: null,
      min: 1,
      max: 100,
      guessCount: 0,
      error: false,
    }
  }

  componentDidMount() {
    this.setNewRandomNumber()
  }

  setNewRandomNumber() {
    this.setState({ randomNum: generateRandomNum(this.state.max, this.state.min) })
  }

  resetGame() {
    this.setState({
      guess: null,
      min: 1,
      max: 100,
      guessCount: 0,
      error: false,
    }, ()=> {
      this.setNewRandomNumber();
    })
  }

  playAgain() {
    this.setState({
      guess: null,
      guessCount: 0,
    }, ()=> {
      this.setNewRandomNumber()
    })
  }

  handleRange(range) {
    if(range) {
      this.setState({ min: +range.min, max: +range.max, error: false, guess: null, }, ()=> { this.setNewRandomNumber() })
    } else {
      this.setState({ error: true })
    }
  }

  displayError() {
    return (
    <h3 id='errorMessage' className='hidden'>Error: Please submit a valid range</h3>
    )
  }

  submitGuess(e) {
    this.setState({
      guess: +e,
      guessCount: this.state.guessCount + 1,
      error: false,
    });
  }

  updateMinMax() {
    return this.setState({
      min: this.state.min - 10,
      max: this.state.max + 10,
    }, ()=> {
      this.setNewRandomNumber()
    })
  }

  handleWinner() {
    if(this.state.guess === this.state.randomNum) {
      // this.updateMinMax();
      this.setState({
        guess: null,
        guessCount: 0,
        randomNum: null,
      })
    }
  }

  render() {
    return(
      <div id='appContainer'>

        <div id='header'>
          <h1 id='number'>Number</h1>
          <h1 id='guesser'>Guesser</h1>
        </div>

        {this.state.error ? this.displayError() : null}

        <h3 className='displayRange'>Guess a number between {this.state.min} and {this.state.max}</h3>

        <NumberInput handleClick={this.submitGuess.bind(this)}
                     min={this.state.min}
                     max={this.state.max}/>

        <MinMax handleClick={this.handleRange.bind(this)}
                handleReset={this.resetGame.bind(this)}
                guessCount={!this.state.error && !this.state.guessCount}/>

        <LatestGuess {...this.state}
                     updateGame={this.handleWinner.bind(this)}
                     playAgain={this.playAgain.bind(this)}
                     />

      </div>
    )
  }
}
