import React, { Component } from 'react';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    
    this.state = {
      students: [],
    }
  }

  componentDidMount() {

    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(results => {
      this.setState({
        students: results.data
      })
    })
  }



  render() {
    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList:</h2>

      </div>
    )
  }
}