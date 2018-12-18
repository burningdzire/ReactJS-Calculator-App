import React, { Component } from 'react';
import "./App.css";

import Display from "../display";
import Keypad from "../keypad";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Display />
          <Keypad />
      </div>
    )
  }
};

export default App;
