import React from 'react';

export const generateRandomNum = () => {
  return Math.floor((Math.random() * 100 + 1));
}

export const compareGuess = (num1, num2, min = 1, max = 100) => {
  let response;
  if(num1 > num2 && num1 <= max) {
    response = 'Too High, Guess Again'
  } else if (num1 < num2 && num1 >= min) {
    response = 'Too Low, Guess Again'
  } else if (num1 === num2) {
    response = 'You Guessed It!!!'
  } else {
    response = `Please guess a number between ${min} and ${max}`
  }
  return response;
}
