import React, { Component } from 'react';
import helperFunctions, { compareGuess } from './helperFunctions';

export default class LatestGuess extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { guess, randomNum, min, max, guessCount, newGame, playAgain, updateGame } = this.props;
    let response = compareGuess(guess, randomNum, min, max);
    let display;

    if(!guess) {
      display = <h4 className='noGuess'>Can you guess the number?</h4>
    } else if(guess !== randomNum) {
      display = (
        <div>
          <h4 className='lastGuessText'>Your last guess was </h4>
          <h4 className='lastGuessNumber'>{guess}</h4>
          <h4 className='lastGuessText'>{response}</h4>
        </div>
      )
    } else if (guess === randomNum) {
          display = (
            <div>
              <div className='responseSection'>
                <h4 id='correctText'>Correct!</h4>
                <h4 className='lastGuessText'> The number is</h4>
                <h4 className='lastGuessNumber'>{ randomNum }</h4>
                <h4 className='lastGuessText'>{ response } { guessCount === 1 ? `${guessCount} try!` : `${guessCount} tries!`}</h4>
              </div>

              <div className='winnerButtons'>
                <button className='button winnerBtn'
                        onClick={ playAgain }>Play Again</button>
                <button className='button winnerBtn'
                        onClick={ updateGame }>Increase Range</button>
              </div>
            </div>
          )
        }

    return (
      <div className='guessSection'>{display}</div>
    )
  }
}
