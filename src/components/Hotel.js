import React, { Component } from 'react'

export class Hotel extends Component {
    render() {
        return (
            <div>
                <h1>Hotel App</h1>
                <div style={styleHotel}>
                    <p>Name: {this.props.hotels[0].name}</p>
                    <p>Location: {this.props.hotels[0].location}</p>
                    <p>Rating: {this.props.hotels[0].rating}</p>
                </div>
                <div style={styleHotel}>
                    <p>Name: {this.props.hotels[1].name}</p>
                    <p>Location: {this.props.hotels[1].location}</p>
                    <p>Rating: {this.props.hotels[1].rating}</p>
                </div>
                <div style={styleHotel}>
                    <p>Name: {this.props.hotels[2].name}</p>
                    <p>Location: {this.props.hotels[2].location}</p>
                    <p>Rating: {this.props.hotels[2].rating}</p>
                </div>
            </div>
        )
    }
}

const styleHotel = {
    display : "inline-block",
    margin : "10px",
    border : "2px solid #eee",
    boxShadow : "0 2px 2px #ccc", 
    background : "white",
    width : "200px",
    padding : "20px",
}

export default Hotel
