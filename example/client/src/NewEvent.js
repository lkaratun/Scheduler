import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Datetime from "react-datetime";
import moment from "moment";
import "react-datetime/css/react-datetime.css";
import "./NewEvent.css";

class NewEvent extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      startTime: moment().format("MMMM Do YYYY, h:mm a"),
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
  updateTime = time => {
    this.setState({ startTime: time.format("MMMM Do YYYY, h:mm a") });
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
          />{" "}
          <br />
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="time">Start time: </label>
          <Datetime
            name="time"
            onChange={this.updateTime}
            defaultValue={new Date().toString()}
          />
          <br />
          <input type="submit" value="Create event" />
        </form>
        <Link to="/">Return to home page</Link>
      </div>
    );
  }
}

export default NewEvent;
