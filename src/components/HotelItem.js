import React, { Component } from 'react';
import Forest from './../forest.jpg';


export class HotelItem extends Component {

    getStyle = () => {
        return {
            display : "inline-block",
            margin : "10px",
            border : "2px solid #eee",
            boxShadow : "0 2px 2px #ccc", 
            background : this.props.hotel.selected ? "red" : "white",
            width : "200px",
            height : "300px",
            padding : "20px",
        }
    }

    render() {
        return (
            <div style={styleMain}>
                <div className="card" style={this.getStyle()} onClick= {this.props.toggleSelected.bind(this, this.props.hotel.id)}>
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

export default HotelItem;
