import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {
  //set state for speed
  state = {
    speed: 0
  }

  componentDidMount(){
    console.log('Speed Control Mounted. Speed: ', this.state.speed);
  };//end componentDidMount

  //speedHandler to adjust speed
  speedHandler = (event, property) => {
    console.log('adjusting Speed');
    if(property === 'increase'){
      //increase state of speed by 1
      this.setState({
        speed: this.state.speed + 1
      })
      // dispatch to store information
      this.props.dispatch({
        type: 'increase'
      })
    } else if(property === 'decrease'){
      //decrease state of speed by 1
      this.setState({
        speed: this.state.speed - 1
      })
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