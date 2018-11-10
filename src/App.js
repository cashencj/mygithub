import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Component2} from "./Component2";
import { Button } from 'antd';

class App extends Component {
  state={
    counter:0 
  
  }

  handlecounter = () => this.setState({ counter: this.state.counter + 1})
  
  render() {
    return (
      <div className="App">
  Caribou Coffee for sale <ul>{this.state.counter} </ul>
  <button onClick = {this.handlecounter}>click</button>
  <Component2 number = {this.state.counter}/>
  <Button onClick = {this.handlecounter}>Default</Button>
      </div>
      
    );
  }
}

export default App;

