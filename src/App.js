import React, { Component } from 'react';
import './App.css';
import Color from './Color';

class App extends Component {
  state = {
    color:['#ffff','#ffff','#ffff']
  }

  RandomColor = ()=>{
    let letters ='0123456789ABCDEF';
    let color_array = [];
    let colors = '#';
    for(let i =0;i<3;i++){
      for(let i =0;i<6;i++){
        colors+= letters[Math.floor(Math.random()*16)];
      }
      color_array.push(colors);
      colors ='#'
    }

    this.setState({
      color:color_array
    })

  }

  navigateToNext = (event) => {
    if(event.key === 'Enter' || event.charCode === 13){
      console.log('enter press here! ')
      this.RandomColor()
    }
  }


  componentWilMount(){
    this.RandomColor()
  }

  render() {
    const {color} = this.state;
    return (
      <div className="main"  tabIndex="-1" onKeyDown={this.navigateToNext}>
        <h1>Click on the screen and press Enter to Generate</h1>
      <div className="container" >
        {color.map((item,index) =>  <Color key={index} identity={index} background={item}/>)}
        {/* <button onClick={this.navigateToNext}  >Generate</button> */}
      </div>
      </div>
    );
  }
}

export default App;

