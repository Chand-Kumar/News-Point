
import React, { Component } from 'react'
import icon from './loading.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={icon} alt="loading" />
      </div>
    )
  }
}
