import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class NewEvent extends Component {
  constructor() {
    super();
    this.state = { name: "", description: "", startTime: new Date() };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:4000/newEvent", {
      name: this.state.name,
      startTime: this.state.startTime
    });
  };

  render() {
    return (
      <div>
        <form method="post" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Event name: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Event name: </label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input type="submit" value="Create event" />
        </form>
        <Link to="/">Return to home page</Link>
      </div>
    );
  }
}

export default NewEvent;
