import React from 'react';

export const generateRandomNum = (max, min) => {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

export const compareGuess = (guess, rando, min = 1, max = 100) => {
  let response;
  if(guess > rando && guess <= max) {
    response = 'Sorry, that guess is too high. Try a lower number.'
  } else if (guess < rando && guess >= min) {
    response = 'Sorry, that guess is too low. Try a higher number.'
  } else if (guess === rando) {
    response = 'You guessed it in'
  } else if (guess > max) {
    response = "You're high bro. Check the range and try again"
  } else if (guess < min) {
    response = "Suuuh dude. That's a bad guess. Check the range and try again"
  }else {
    response = `Please guess a number between ${min} and ${max}`
  }
  return response;
}
