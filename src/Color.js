import React, { Component } from 'react';
import './App.css';

class Color extends Component {
  
  render() {
    return (
      <div className="color-palette" id={this.props.background}>
        <div className="color" style={{backgroundColor:(this.props.background)}} ></div>
    <div className="text">Color Name :{this.props.background}</div>
      </div>
    );
  }
}

export default Color;