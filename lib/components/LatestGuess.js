import React, { Component } from 'react';
import helperFunctions, { compareGuess } from './helperFunctions';

export default class LatestGuess extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { guess, randomNum, min, max, guessCount, newGame } = this.props
    let response = compareGuess(guess, randomNum, min, max)
    let display;

    if(newGame) {
      display = <h4>Can you guess the number?</h4>
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
              <h4> Correct! The number is { randomNum } </h4>
              <h4>{response} {guessCount === 1 ? `${guessCount} try!` : `${guessCount} tries!`}</h4>
              <h4>The range is a bit larger, see if you can get it again!</h4>
            </div>
          )
          return this.props.updateGame()
        }

    return(
      <div className='guessResponse'>
        {display}
      </div>
    )
  }
}
