import React, { Component } from 'react';
import HotelItem from './HotelItem';

export class Hotel extends Component {
    render() {
        return this.props.hotels.map((hotel) => (
            <HotelItem hotel={hotel} toggleSelected={this.props.toggleSelected}/>
        ))
    }
}


export default Hotel
