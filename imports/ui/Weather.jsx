import React, { Component, PropTypes } from 'react'

export default class Weather extends Component {
  render () {
    return (
      <div>{this.props.currentWeather.icon}</div>
    )
  }
}

Weather.propTypes = {
  currentWeather: PropTypes.object.isRequired
}
