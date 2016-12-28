import React, { Component } from 'react';
import helperFunctions, { compare } from './helperFunctions';

 const LatestGuess = (props) => {
  let state = props.state
  return(
    <div id='guessSection'>
      <p className='lastGuessText'>Your last guess was </p>
      <p>{state.guess}</p>
      <p>{compare(state.guess, state.randomNum, state.minNum, state.maxNum)}</p>
    </div>
  )
}

module.exports = LatestGuess;
