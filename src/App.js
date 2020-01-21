import React, { Component } from 'react';
import Hotel from './components/Hotel';

export class App extends Component {
  
  state = {
    hotels : [
      {
        id : 1,
        name : "Hotel 1",
        location : "Guwahati",
        rating : "4.4",
        selected : false,
      },
      {
        id : 2,
        name : "Hotel 2",
        location : "Kolkata",
        rating : "4.2",
        selected : false,
      },
      {
        id : 3,
        name : "Hotel 3",
        location : "Saltlake",
        rating : "4.3",
        selected : false,
      }
    ]
  }

  toggleSelected = (id) => {
    this.setState({ hotels : this.state.hotels.map((hotel) => {
      if(hotel.id === id){
        hotel.completed = !hotel.completed
      }
      return hotel;
    }) });
  }
  
  render() {
    return (
      <div>
        <h1 style= {{textAlign : "center"}}>Hotel App</h1>
        <Hotel hotels={this.state.hotels} toggleSelected={this.toggleSelected}/>
      </div>
    )
  }
}

export default App
