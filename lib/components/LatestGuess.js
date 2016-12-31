import React, { Component } from 'react';
import helperFunctions, { compareGuess } from './helperFunctions';

export default class LatestGuess extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { guess, randomNum, min, max, guessCount } = this.props
    // let state = this.props.state
    let display;
    let response = compareGuess(guess, randomNum, min, max)
    if(!guess) {
      display = (
        <h4>Can you guess the number?</h4>
      )
    } else if(guess !== randomNum) {
      display = (
        <div>
          <h4 className='lastGuessText'>Your last guess was </h4>
          <h4>{guess}</h4>
          <h4>{response}</h4>
        </div>
      )
    } else {
      display = (
        <div>
          <h4>{response} {guessCount === 1 ? `${guessCount} try!` : `${guessCount} tries!`}</h4>
        </div>
      )
      // this.props.updateGame()
    }

    return(
      <div>
        {display}
      </div>
    )
  }
}
