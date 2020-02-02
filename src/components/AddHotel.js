import React, { Component } from 'react';

export class AddHotel extends Component {

    state = {
        title : "",
        location : "",
        rating : "",
    }
    

    onSubmit = (e) => {
        this.preventDefault();
        this.props.addHotel(this.obj);
        this.setState({title : ""});
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    render() {
        return (
            <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
                <input type="text" name="title" style={{flex : "10", padding : "5px"}} 
                placeholder="Add Title..." value={this.state.title} onChange={this.onChange}/>
                <input type="text" name="location" style={{flex : "10", padding : "5px"}} 
                placeholder="Add location..." value={this.state.location} onChange={this.onChange}/>
                <input type="text" name="rating" style={{flex : "10", padding : "5px"}} 
                placeholder="Add rating..." value={this.state.rating} onChange={this.onChange}/>
                <input type="submit" value="Submit" className="btn" style={{flex : "1"}} />
            </form>
        )
    }
}

export default AddHotel
