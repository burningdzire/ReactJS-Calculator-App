import React, { Component } from 'react';
import "./App.css";

import Display from "../display";
import { addInput, calculateResult } from "../../store/actions/calcActions";
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <div className="container">
        <table>
          <tbody>
            <tr>
              <th><button onClick={() => this.props.addInput("7")}>7</button></th>
              <th><button onClick={() => this.props.addInput("8")}>8</button></th>
              <th><button onClick={() => this.props.addInput("9")} >9</button></th>
              <th className="operator"><button onClick={() => this.props.addInput("/")} >/</button></th>
            </tr>
            <tr>
              <th><button onClick={() => this.props.addInput("4")} >4</button></th>
              <th><button onClick={() => this.props.addInput("5")} >5</button></th>
              <th><button onClick={() => this.props.addInput("6")} >6</button></th>
              <th className="operator"><button onClick={() => this.props.addInput("*")} >x</button></th>
            </tr>
            <tr>
              <th><button onClick={() => this.props.addInput("1")} >1</button></th>
              <th><button onClick={() => this.props.addInput("2")} >2</button></th>
              <th><button onClick={() => this.props.addInput("3")} >3</button></th>
              <th className="operator"><button onClick={() => this.props.addInput("-")} >-</button></th>
            </tr>
            <tr>
              <th><button onClick={() => this.props.addInput("0")} >0</button></th>
              <th><button onClick={() => this.props.addInput(".")} >.</button></th>
              <th className="compute"><button onClick={() => this.props.calculateResult()} >=</button></th>
              <th className="operator"><button onClick={() => this.props.addInput("+")} >+</button></th>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    calcReducer: state.calcReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addInput: (input) => {
      dispatch(addInput(input));
    },
    calculateResult: () => {
      dispatch(calculateResult());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
