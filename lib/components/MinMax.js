import React, { Component } from 'react';

export default class MinMax extends Component {
  constructor() {
    super()
    this.state = {
      min: '',
      max: '',
    }
  }

  handleKeyUp(e) {
    if(e.keyCode === 13 && this.state.min && this.state.max) {
      this.setNewRange();
    }
  }

  preventKey(e) {
    if(e.keyCode === 69) {
      e.preventDefault()
    }
  }

  setNewRange() {
    +this.state.min < +this.state.max ? this.props.handleClick(this.state) : this.props.handleClick()
    this.clearInputs()
  }

  clearInputs() {
    this.setState({ min: '', max: '' })
    document.getElementById('user-guess').focus()
  }

  render() {
    return(
      <div id='minMaxSection'>
        <input id='minRangeInput'
               className='input rangeInput'
               value={this.state.min}
               type='number'
               placeholder='Min'
               onKeyUp={this.handleKeyUp.bind(this)}
               onKeyDown={this.preventKey.bind(this)}
               onChange={(e)=> {
                 this.setState({ min: e.currentTarget.value })
               }}>
        </input>
        <input id='maxRangeInput'
               className='input rangeInput'
               value={this.state.max}
               type='number'
               placeholder='Max'
               onKeyUp={this.handleKeyUp.bind(this)}
               onKeyDown={this.preventKey.bind(this)}
               onChange={(e)=> {
                 this.setState({ max: e.currentTarget.value })
               }}>
        </input>
        <button id='updateRangeBtn'
                className='button'
                disabled={!this.state.min || !this.state.max}
                onClick={()=> {
                  this.setNewRange()
                  this.clearInputs()
                }}
                >Update</button>
        <button className='button'
          id='reset-game-btn'
          disabled={this.props.guessCount}
          onClick={this.props.handleReset}
          >Reset</button>
      </div>
    )
  }
}
