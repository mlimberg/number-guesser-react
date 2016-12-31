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
    this.state.min < this.state.max
    ?
    this.setNewRange()
    :
    this.sendError()
  }

  setNewRange() {
    this.props.handleClick(this.state)
    this.clearInputs()
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
      <div>
        <div>
          <input id='minRangeInput'
                 className='input rangeInput'
                 value={this.state.min}
                 type='number'
                 placeholder='Min'
                 onKeyUp={this.handleKeyUp.bind(this)}
                 onChange={(e)=> {
                   this.setState({ min: e.currentTarget.value })
                 }}></input>
          <input id='maxRangeInput'
                 className='input rangeInput'
                 value={this.state.max}
                 type='number'
                 placeholder='Max'
                 onKeyUp={this.handleKeyUp.bind(this)}
                 onChange={(e)=> {
                   this.setState({ max: e.currentTarget.value })
                 }}></input>
          <button id='updateRangeBtn'
                  className='button'
                  disabled={!this.state.min || !this.state.max}
                  onClick={(e) => {
                    this.handleSubmit();
                  }}
                  >Update</button>
                  
        </div>
      </div>
    )
  }
}
