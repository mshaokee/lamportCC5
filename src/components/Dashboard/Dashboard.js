import React, { Component } from 'react';

// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD

class Dashboard extends Component {

  componentDidMount(){
    console.log('Dashboard mounted', this.props.dashboard);
  };//end componentDidMount

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
{/*         
        <p>{this.props.dashboard.speed}</p>
        <p>{this.props.dashboard.passengers}</p> */}
      </div>
    )
  }
}

export default Dashboard;