import React, { Component } from 'react';
import logo from './logo.svg';
import reduxLogo from './redux.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';

// components
import SpeedControl from '../SpeedControl/SpeedControl';
import Passengers from '../Passengers/Passengers';
import Dashboard from '../Dashboard/Dashboard';


class App extends Component {

  componentDidMount(){
    console.log('CHECK APP STATUS', this.props.reduxState);
  }

  render() {
    
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={reduxLogo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React Redux</h1>
            <nav>
              <ul>
                <li><Link to="/">Speed Control</Link></li>
                <li><Link to="/passengers">Passengers</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
            </nav>
          </header>

          <div className="content-container">
            <Route
              exact path="/"
              dispatch={this.props.dispatch}
              component={SpeedControl}
            />
            <Route
              path="/passengers"
              dispatch={this.props.dispatch}
              component={Passengers}
            />
            <Route
              path="/dashboard"
              dispatch={this.props.dispatch}
              component={Dashboard}
            />
          </div>


        </div>
      </Router>
    );
  }
}

//make sure to connect
const putReduxStateToProps = (reduxState) => ({reduxState});

export default connect(putReduxStateToProps)(App);
