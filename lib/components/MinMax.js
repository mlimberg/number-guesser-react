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
      this.props.handleClick(this.state)
      this.clearInputs()
    }
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
                 onKeyUp={this.handleKeyUp.bind(this)}
                 onChange={(e)=> {
                   this.setState({ min: parseFloat(e.currentTarget.value)})
                 }}></input>
          <input id='maxRangeInput'
                 className='input rangeInput'
                 value={this.state.max}
                 onKeyUp={this.handleKeyUp.bind(this)}
                 onChange={(e)=> {
                   this.setState({ max: parseFloat(e.currentTarget.value)})
                 }}></input>
          <button id='updateRangeBtn'
                  className='button'
                  disabled={!this.state.min || !this.state.max}
                  onClick={(e) => {
                    this.props.handleClick(this.state)
                    this.clearInputs()
                  }}
                  >Update</button>
        </div>
      </div>
    )
  }
}
