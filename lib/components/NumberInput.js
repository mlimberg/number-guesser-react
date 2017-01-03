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

  handleKeyUp(e) {
    if(e.keyCode === 13) {
      this.submitGuess();
    }
  }

  submitGuess() {
    this.props.handleClick(this.state.guess)
    document.getElementById('user-guess').focus()
    this.clearInput()
  }

  render() {
    return(
      <div id='inputSection'>
        <input placeholder='Guess a Number'
               min={this.props.min}
               max={this.props.max}
               value={this.state.guess}
               className='input'
               id='user-guess'
               type='number'
               onKeyUp={this.handleKeyUp.bind(this)}
               onChange={(e) => {
                 this.setState({ guess: e.currentTarget.value})
               }}
               >
        </input>
        <button className='button'
                id='user-submit-btn'
                disabled={!this.state.guess}
                onClick={() => {
                  this.submitGuess();
                }}
                >Guess</button>
        <button className='button'
                id='clear-input-btn'
                disabled={!this.state.guess}
                onClick={()=> {
                  this.setState({ guess: '' })
                }}
                >Clear</button>
      </div>
    )
  }
}
