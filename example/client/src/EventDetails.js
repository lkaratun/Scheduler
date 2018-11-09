import moment from "moment";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

import React, { Component } from "react";

class EventDetails extends Component {
  constructor({ match: { params } }) {
    super();
    this.state = { id: params.id, redirect: false };
  }
  async componentDidMount() {
    const eventData = (await axios.get(
      `http://localhost:4000/event/${this.state.id}`
    )).data;
    this.setState({ eventData });
  }
  deleteEvent = async () => {
    await axios.delete(`http://localhost:4000/event/${this.state.id}`);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return this.state.eventData ? (
      <div>
        <strong> {this.state.eventData.name}</strong>
        <br />
        {moment(this.state.eventData.startTime).format("MMMM Do YYYY, h:mm a")}
        <br />
        {this.state.eventData.description}
        <br />
        <button onClick={this.deleteEvent}>Delete event</button>
        <Link to="/">Home page</Link>
      </div>
    ) : null;
  }
}

export default EventDetails;
