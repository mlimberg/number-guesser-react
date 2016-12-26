import React, { Component } from 'react';

export default class NumberInput extends Component {
  constructor() {
    super()
    this.state = {
      guess: '',
    }
  }

  render() {
    return(
      <div id='inputSection'>
        <input placeholder='Guess a Number'
               className='input'
               id='user-guess'></input>
        <button className='button'
                id='user-guess-btn'>Guess</button>
      </div>
    )
  }
}
