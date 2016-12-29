import React, { Component } from 'react';

export default class MinMax extends Component {
  constructor() {
    super()
    this.state = {
      min: '',
      max: '',
    }
  }

  render() {
    return(
      <div>
        <div>
          <input id='minRangeInput'
                 className='input rangeInput'
                 onChange={(e)=> {
                   this.setState({ min: parseFloat(e.currentTarget.value)})
                 }}></input>
          <input id='maxRangeInput'
                 className='input rangeInput'
                 onChange={(e)=> {
                   this.setState({ max: parseFloat(e.currentTarget.value)})
                 }}></input>
          <button id='updateRangeBtn'
                  className='button'
                  disabled={!this.state.min || !this.state.max}
                  onClick={(e) => {
                    this.props.handleClick(this.state)
                  }}
                  >Update</button>
        </div>
      </div>
    )
  }
}
