import React, { Component } from 'react'

import Weather from '../Weather.jsx'

export default class App extends Component {
  getWeateher () {
    return Weather.getCurrentWeather()
  }

  renderWeather () {
    return this.getWeather()
  }

  render () {
    return (
      <div className='container'>
        <header>
          <h1>Hello, World!</h1>
        </header>

        <ul>
          {this.renderWeather()}
        </ul>
      </div>
    )
  }
}
