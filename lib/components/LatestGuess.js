import React, { Component } from 'react';
import helperFunctions, { compareGuess } from './helperFunctions';

 const LatestGuess = (props) => {
  let state = props.state
  let response = compareGuess(state.guess, state.randomNum, state.min, state.max)
  if(state.guess === state.randomNum) {
    display
  }
  return(
    <div id='guessSection'>
      <h4 className='lastGuessText'>Your last guess was </h4>
      <h4>{state.guess}</h4>
      <h4>{response}</h4>
    </div>
  )
}

module.exports = LatestGuess;
