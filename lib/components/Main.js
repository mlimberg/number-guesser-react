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

  // submitGuess(e) {
  //   this.setState({
  //     guess: parseFloat(e),
  //     guessCount: this.state.guessCount + 1
  //   }, ()=> {
  //     this.handleWinner();
  //   });
  // }

  submitGuess(e) {
    this.setState({
      guess: parseFloat(e),
      guessCount: this.state.guessCount + 1
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

  // handleWinner() {
  //   if(this.state.guess === this.state.randomNum) {
  //     this.setState({
  //       min: this.state.min - 10,
  //       max: this.state.max + 10,
  //     }, ()=> {
  //       this.setNewRandomNumber()
  //     })
  //   }
  // }

  render() {
    return(
      <div className='appContainer'>

        <div className='header'>
          <h1 id='number'>Number</h1>
          <h1 id='guesser'>Guesser</h1>
        </div>

        <h3>Guess a number between {this.state.min} and {this.state.max}</h3>

        <NumberInput handleClick={this.submitGuess.bind(this)}/>

        <MinMax error={this.displayError.bind(this)}
                handleClick={ (range)=> {
                this.setState({
                  min: range.min,
                  max: range.max,
                }, ()=> {
                  this.setNewRandomNumber()
                })
        }} />

        <div id='guessCountText'>
          <p>Tries: {this.state.guessCount}</p>
        </div>

        <button className='button'
          id='reset-game-btn'
          disabled={!this.state.guess}
          onClick={this.resetGame.bind(this)}
          >Reset</button>

          <LatestGuess {...this.state} updateGame={()=> {
            this.updateRange.bind(this)
            this.setState({ guess: null })
          }}/>

      </div>
    )
  }
}
