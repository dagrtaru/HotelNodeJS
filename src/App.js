import React, { Component } from 'react';
import Hotel from './components/Hotel';
import AddHotel from './components/AddHotel';

let hotel_number = 4;

export class App extends Component {
  
  state = {
    hotels : [
      {
        id : 1,
        name : "Hotel 1",
        location : "Guwahati",
        story : "Guwahati  is the largest city in the Northeastern Indian state of Assam and also the largest metropolis in the northeastern India. A major riverine port city along with hills is one of the fastest growing cities in India, Guwahati is situated on the south bank of the Brahmaputra",
        rating : "4.4",
        selected : false,
      },
      {
        id : 2,
        name : "Hotel 2",
        location : "Kolkata",
        story : "Kolkata , also known as Calcutta  (the official name until 2001) is the capital of the Indian state of West Bengal. According to the 2011 Indian census, it is the seventh most populous city; the city had a population of 4.5 million, while the suburb population brought the total to 14.1 million",
        rating : "4.2",
        selected : false,
      },
      {
        id : 3,
        name : "Hotel 3",
        location : "Saltlake",
        story : "Salt Lake is a city in Bidhannagar Municipal Corporation of North 24 Parganas district in the Indian state of West Bengal. It is close to Kolkata and also a part of the area covered by Kolkata Metropolitan Development Authority (KMDA). It was developed between 1958 and 1965 as a planned satellite city",
        rating : "4.3",
        selected : false,
      }
    ]
  }

  toggleSelected = (id) => {
    this.setState({ hotels : this.state.hotels.map((hotel) => {
      if(hotel.id === id){
        hotel.selected = !hotel.selected
      }
      return hotel;
    }) });
  }
  
  addHotel = (title, location, rating) => {
    const newHotel = {
      id : hotel_number,
      name : title,
      location : location,
      rating : rating
    }
    this.setState({hotels : [...this.state.hotels, newHotel]});
    hotel_number += 1;
  }

  render() {
    return (
      <div>
        <h1 style= {{fontFamily : "arial", textAlign : "center"}}>Hotel App</h1>
        <AddHotel addHotel={this.addHotel}/>
        <Hotel hotels={this.state.hotels} toggleSelected={this.toggleSelected}/>
      </div>
    )
  }
}

export default App
