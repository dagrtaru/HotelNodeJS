import React, { Component } from 'react';
import Forest from './../forest.jpg';

let change = false;

export class HotelItem extends Component {

    setChange = () => {
        change = !change;
        console.log(change);
    }

    render() {
        return (
            <div style={styleMain}>
                <div style={styleHotel} onClick= {this.setChange}>
                    <p>Name: {this.props.hotel.name}</p>
                    <p>Location: {this.props.hotel.location}</p>
                    <p>Rating: {this.props.hotel.rating}</p>
                    <img src = {Forest} alt="A Forest"/>
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
    background : ({change} === true)?"red":"white",
    width : "200px",
    height : "300px",
    padding : "20px",
}

export default HotelItem;
