import React, { Component } from 'react';

export class AddHotel extends Component {

    state = {
        title : "",
        location : "",
        rating : ""
    }
    
    title = "";
    location = "";
    rating = "";

    obj = {
        title : this.title,
        location : this.location,
        rating : this.rating
    }

    onSubmit = (e) => {
        this.preventDefault();
        this.props.addHotel(this.obj);
        this.setState({title : ""});
    }

    onTitleChange = (e) => {
        this.setState({title : e.target.value});
    }

    onLocationChange = (e) => {
        this.setState({location : e.target.value});
    }

    onRatingChage = (e) => {
        this.setState({rating : e.target.value});
    }

    render() {
        return (
            <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
                <input type="text" name="title" style={{flex : "10", padding : "5px"}} 
                placeholder="Add Title..." onChange={this.onTitleChange}/>
                <input type="text" name="location" style={{flex : "10", padding : "5px"}} 
                placeholder="Add location..." onChange={this.onLocationChange}/>
                <input type="text" name="location" style={{flex : "10", padding : "5px"}} 
                placeholder="Add rating..." onChange={this.onRatingChange}/>
                <input type="submit" value="Submit" className="btn" style={{flex : "1"}} />
            </form>
        )
    }
}

export default AddHotel
