import React, { Component } from 'react';

 const LatestGuess = ({ guess }) => {
  return(
    <div id='guessSection'>
      <p>{guess}</p>
    </div>
  )
}

module.exports = LatestGuess;
