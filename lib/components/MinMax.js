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
      this.handleSubmit();
    }
  }

  handleSubmit() {
    this.setNewRange(this.state)
    this.clearInputs();
  }

  setNewRange() {
    this.state.min < this.state.max
    ?
    this.props.handleClick(this.state)
    :
    this.props.handleClick({min: 'error', max: 'error'})
  }

  sendError() {
    this.props.error()
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
               onChange={(e)=> {
                 this.setState({ min: +e.currentTarget.value })
               }}></input>
        <input id='maxRangeInput'
               className='input rangeInput'
               value={this.state.max}
               type='number'
               placeholder='Max'
               onKeyUp={this.handleKeyUp.bind(this)}
               onChange={(e)=> {
                 this.setState({ max: +e.currentTarget.value })
               }}></input>
        <button id='updateRangeBtn'
                className='button'
                disabled={!this.state.min || !this.state.max}
                onClick={this.handleSubmit.bind(this)}
                >Update</button>
      </div>
    )
  }
}
