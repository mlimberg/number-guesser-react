import React, { Component } from 'react';

 const Guess = ({ guess }) => {
  return(
    <div id='guessSection'>
      <p>{guess}</p>
    </div>
  )
}

module.exports = Guess;
