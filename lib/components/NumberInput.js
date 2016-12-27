import React, { Component } from 'react';

export default class NumberInput extends Component {
  constructor() {
    super()
    this.state = {
      guess: '',
    }
  }

  clearInput() {
    this.setState({ guess: '' })
  }

  render() {
    return(
      <div id='inputSection'>
        <input placeholder='Guess a Number'
               value={this.state.guess}
               className='input'
               id='user-guess'
               onChange={(e) => {
                 this.setState({ guess: e.currentTarget.value})}}
               ></input>
        <button className='button'
                id='user-guess-btn'
                onClick={() => {
                  this.props.handleClick(this.state.guess)
                  this.clearInput()
                }}
                disabled={!this.state.guess}
                >Guess</button>
      </div>
    )
  }
}
