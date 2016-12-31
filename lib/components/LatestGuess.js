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

    if(!guess) {
      display = <h4 className='noGuess'>Can you guess the number?</h4>
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
              <h4><span id='extend-range-btn'
                        onClick={this.props.updateGame}>Click here </span>
                        to increase the range</h4>
            </div>
          )
          // return this.props.updateGame()
        }

    return(
      <div className='guessSection'>
        {display}
      </div>
    )
  }
}
