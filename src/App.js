// Create an App class component from scratch
import React, { Component } from 'react'

export default class App extends Component {
    //Write a componentDidMount method
  componentDidMount() {
      //Inside the method, send a fetch request to http://api.open-notify.org/astros.json
    fetch('http://api.open-notify.org/astros.json')
    .then(data => data.json())
    .then(data => console.log("test"))
  }

  render() {
    return "Test"
  }
}