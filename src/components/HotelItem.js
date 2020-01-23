import React, { Component } from 'react';
import Forest from './../forest.jpg';


export class HotelItem extends Component {

    getStyle = () => {
        return {
            fontFamily : "arial",
            display : "inline-block",
            margin : "10px",
            border : "2px solid #eee",
            boxShadow : "0 2px 2px #ccc", 
            background : this.props.hotel.selected ? "#D3D3D3" : "white",
            width : "200px",
            height : "300px",
            padding : "20px",
        }
    }

    render() {
        return (
            <div style={styleMain}>
                <div style={this.getStyle()} onClick= {this.props.toggleSelected.bind(this, this.props.hotel.id)}>
                        {
                            this.props.hotel.selected ?
                            <div>
                                <p>{this.props.hotel.story}</p>
                            </div> : 
                            <div>
                                <p>Name: {this.props.hotel.name}</p>
                                <img src = {Forest} alt="A Forest"/>
                                <p>Location: {this.props.hotel.location}</p>
                                <p>Rating: {this.props.hotel.rating}</p>
                            </div>
                        }
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
