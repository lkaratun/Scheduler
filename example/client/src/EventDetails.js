import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";
import "./EventDetails.css";

class EventDetails extends Component {
  constructor({ match: { params } }) {
    super();
    this.state = { id: params.id, redirect: false };
  }
  async componentDidMount() {
    const eventData = (await axios.get(
      `https://levkaratun.com:4000/event/${this.state.id}`
    )).data;
    this.setState({ eventData });
  }
  deleteEvent = async () => {
    await axios.delete(`https://levkaratun.com:4000/event/${this.state.id}`);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return this.state.eventData ? (
      <div>
        <p>
          <strong> {this.state.eventData.name}</strong>
        </p>
        <p> {this.state.eventData.startTime}</p>
        <p> {this.state.eventData.description}</p>
        <button onClick={this.deleteEvent}>Delete event</button>
        <Link to="/">Home page</Link>
      </div>
    ) : null;
  }
}

export default EventDetails;
