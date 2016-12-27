import React from 'react';

export const generateRandomNum = () => {
  return Math.floor((Math.random() * 100 + 1));
}

// export const compare = (num1, num2) => {
//   let response;
//   if(num1 > num2) {
//     response = 'Too High, Guess Again'
//   } else if (num1 < num2) {
//     response = 'Too Low, Guess Again'
//   } else if (num1 === num2) {
//     response = 'You Guessed It!!!'
//   } else
//   return response
// }

export const compare = (num1, num2, min = 1, max = 100) => {
  let response;
  switch(num1) {
    case num1 > num2:
      response = 'Too High, Guess Again'
    case num1 < num2:
      response = 'Too Low, Guess Again'
    case num1 === num2:
      response = 'You Guessed It!!!'
    default:
      response = `Please guess a number between ${min} and ${max}`
  }
  return response
}
