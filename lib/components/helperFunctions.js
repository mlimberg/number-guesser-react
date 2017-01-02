import React from 'react';

export const generateRandomNum = (max, min) => {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

export const compareGuess = (num1, num2, min = 1, max = 100) => {
  let response;
  if(num1 > num2 && num1 <= max) {
    response = 'Sorry, that guess is too high. Try a lower number.'
  } else if (num1 < num2 && num1 >= min) {
    response = 'Sorry, that guess is too low. Try a higher number.'
  } else if (num1 === num2) {
    response = 'You guessed it in'
  } else {
    response = `Please guess a number between ${min} and ${max}`
  }
  return response;
}
