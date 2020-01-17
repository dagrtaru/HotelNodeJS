import React, { Component } from 'react';
import Hotel from './components/Hotel';

export class App extends Component {
  
  state = {
    hotels : [
      {
        id : 1,
        name : "Hotel 1",
        location : "Guwahati",
        rating : "4.4"
      },
      {
        id : 2,
        name : "Hotel 2",
        location : "Kolkata",
        rating : "4.2"
      },
      {
        id : 3,
        name : "Hotel 3",
        location : "Saltlake",
        rating : "4.3"
      }
    ]
  }
  
  render() {
    return (
      <div>
        <Hotel hotels={this.state.hotels}/>
      </div>
    )
  }
}

export default App
