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
    }, ()=> {
      this.setNewRandomNumber();
    })
  }

  displayError() {
    console.log('errrror!')
  }

  submitGuess(e) {
    this.setState({
      guess: parseFloat(e),
      guessCount: this.state.guessCount + 1,
      newGame: false
    });
  }

  updateRange() {
    return this.setState({
      min: this.state.min - 10,
      max: this.state.max + 10,
    }, ()=> {
      this.setNewRandomNumber()
    })
  }

  handleWinner() {
    if(this.state.guess === this.state.randomNum) {
      this.updateRange();
      this.setState({
        guess: null,
        guessCount: 0,
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

        <h3>Guess a number between {this.state.min} and {this.state.max}</h3>

        <NumberInput handleClick={this.submitGuess.bind(this)}/>

        <div id='guessCountText'>
          <p>Tries: {this.state.guessCount}</p>
        </div>

        <MinMax error={this.displayError.bind(this)}
                handleClick={ (range)=> {
                this.setState({
                  min: range.min,
                  max: range.max,
                }, ()=> {
                  this.setNewRandomNumber()
                })
        }} />

        <button className='button'
          id='reset-game-btn'
          disabled={!this.state.guess}
          onClick={this.resetGame.bind(this)}
          >Reset</button>

          <LatestGuess {...this.state}
                       updateGame={this.handleWinner.bind(this)}
                      />

      </div>
    )
  }
}
