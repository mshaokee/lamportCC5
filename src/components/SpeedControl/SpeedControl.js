import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {

  componentDidMount(){
    console.log('Speed Control Mounted.');
  };//end componentDidMount

  //speedHandler to adjust speed
  speedHandler = (event, property) => {
    console.log('adjusting Speed');
    if(property === 'increase'){
      // dispatch to store information
      this.props.dispatch({
        type: 'increase'
      })
    } else if(property === 'decrease'){
      // dispatch to store information
      this.props.dispatch({
        type: 'decrease'
      })
    }
  };//end speedHandler

  render() {
    return (
      <div>
        <h2>Speed Control</h2>
        <button onClick={(event) => this.speedHandler(event, 'increase')}>Increase Speed</button>
        {/* this should be dispatch info */}
        <p>{this.props.speed.speed}</p>
        <button onClick={(event) => this.speedHandler(event, 'decrease')}>Decrease Speed</button>
      </div>
    )
  }
}

export default SpeedControl;