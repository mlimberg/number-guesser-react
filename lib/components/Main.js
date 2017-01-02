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

  playAgain() {
    this.setState({
      guess: null,
      guessCount: 0,
    }, ()=> {
      this.setNewRandomNumber()
    })
  }

  handleRange(input) {
    console.log(input)
    this.setState({
      min: input.min,
      max: input.max,
    })
  }

  displayRange(input) {
    let range;
    isNaN(this.state.min)
    ?
    range = <h3 id='errorMessage' className='displayRange'>Error: Please submit a valid range</h3>
    :
    range = <h3 className='displayRange'>Guess a number between {this.state.min} and {this.state.max}</h3>

    return (
      <div>{range}</div>
    )
  }

  submitGuess(e) {
    this.setState({
      guess: parseFloat(e),
      guessCount: this.state.guessCount + 1,
      newGame: false
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
      this.updateMinMax();
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

        {this.displayRange()}

        <NumberInput handleClick={this.submitGuess.bind(this)}/>

        {/* <div id='guessCountText'>
          <p>Tries: {this.state.guessCount}</p>
        </div> */}

        <div id='rangeSection'>
          <MinMax handleClick={this.handleRange.bind(this)} />

          <button className='button'
            id='reset-game-btn'
            onClick={this.resetGame.bind(this)}
            >Reset</button>
        </div>

            <LatestGuess {...this.state}
                         updateGame={this.handleWinner.bind(this)}
                         playAgain={this.playAgain.bind(this)}
                        />

      </div>
    )
  }
}
