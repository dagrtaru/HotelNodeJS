import React, { Component } from 'react';
import Forest from './../forest.jpg';

export class HotelItem extends Component {
    render() {
        return (
            <div style={styleMain}>
            <div style={styleHotel}>
                <p>Name: {this.props.hotel.name}</p>
                <p>Location: {this.props.hotel.location}</p>
                <p>Rating: {this.props.hotel.rating}</p>
                <img src = {Forest}/>
            </div>
            </div>
        )
    }
}

const styleMain = {
    display : "inline-block",
    textAlign : "center"
}

const styleHotel = {
    display : "inline-block",
    margin : "10px",
    border : "2px solid #eee",
    boxShadow : "0 2px 2px #ccc", 
    background : "white",
    width : "200px",
    height : "300px",
    padding : "20px",
}

export default HotelItem;
