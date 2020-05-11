import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {

  state = {
    passengers: []
  }

  handleChange = (event, property) => {
    console.log('in handleChange passengers', event.target.value);
    this.setState({
      ...this.state.passengers,
      [property]: event.target.value
    })
  };//end handleChange

  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input onChange={(event) => this.handleChange(event, 'passengers')}type="text" name="name" placeholder="Enter Name" />
        <button>Add Passenger</button>

        <ul>
          <li>{this.state.passengers}</li>
        </ul>
      
      </div>
    )
  }
}

export default Passengers;