import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class NewEvent extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      startTime: new Date(),
      redirect: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:4000/newEvent", {
      name: this.state.name,
      description: this.state.description,
      startTime: this.state.startTime
    });
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

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
          <label htmlFor="description">Description: </label>
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
