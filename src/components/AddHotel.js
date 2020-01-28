import React, { Component } from 'react';

export class AddHotel extends Component {

    state = {
        title : ""
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

    onChange = (e) => {
        this.setState({title : e.target.value});
    }

    render() {
        return (
            <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
                <input type="text" name="title" style={{flex : "10", padding : "5px"}} 
                placeholder="Add Title..." value={this.title} onChange={this.onTitleChange}/>
                <input type="text" name="title" style={{flex : "10", padding : "5px"}} 
                placeholder="Add location..." value={this.location} onChange={this.onTitleChange}/>
                <input type="text" name="title" style={{flex : "10", padding : "5px"}} 
                placeholder="Add rating..." value={this.rating} onChange={this.onTitleChange}/>
                <input type="submit" value="Submit" className="btn" style={{flex : "1"}} />
            </form>
        )
    }
}

export default AddHotel
