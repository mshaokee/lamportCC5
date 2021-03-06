import React, { Component } from 'react';

// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {

  state = {
    passengers: ''
  }

  componentDidMount(){
    console.log('Passengers mounted', this.props.seating);
  }

  handleChange = (event, property) => {
    console.log('in handleChange passengers', event.target.value);
    //changes passengers
    this.setState({
      ...this.state.passengers,
      [property]: event.target.value
    })
  };//end handleChange

  submitPassenger = () => {
    console.log('submitting passenger',);
    //dispatch passenger to redux
    this.props.dispatch({
      type: 'passenger',
      payload: this.state.passengers
    })
  };//end submitPassenger

  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input onChange={(event) => this.handleChange(event, 'passengers')}type="text" name="name" placeholder="Enter Name" />
        <button onClick={this.submitPassenger}>Add Passenger</button>
       
        <ul>
          {this.props.seating.map((people, index) => {
            return(
              <li key={index}>{people}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Passengers;