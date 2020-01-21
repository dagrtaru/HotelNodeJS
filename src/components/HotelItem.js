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

    style1 = () => {
        return {
            visibility : this.props.hotel.selected ? "visible" : "hidden" 
        }
    }

    style2 = () => {
        return {
            visibility : this.props.hotel.selected ? "hidden" : "visible"
        }
    }

    render() {
        return (
            <div style={styleMain}>
                <div className="card" style={this.getStyle()} onClick= {this.props.toggleSelected.bind(this, this.props.hotel.id)}>
                    <div style={this.style1()}>
                        <p>Name: {this.props.hotel.name}</p>
                        <p>Location: {this.props.hotel.location}</p>
                        <p>Rating: {this.props.hotel.rating}</p>
                    </div>
                    <div style={this.style2()}>
                        <img src = {Forest} alt="A Forest"/>
                        <p>Location: {this.props.hotel.location}</p>
                    </div>
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
