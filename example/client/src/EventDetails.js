import moment from "moment";
import { Link } from "react-router-dom";
import axios from "axios";

import React, { Component } from "react";

class EventDetails extends Component {
  constructor({ match: { params } }) {
    super();
    this.state = { id: params.id };
  }
  async componentDidMount() {
    const eventData = (await axios.get(
      `http://localhost:4000/event/${this.state.id}`
    )).data;
    this.setState({ eventData });
  }

  render() {
    return this.state.eventData ? (
      <div>
        <strong> {this.state.eventData.title}</strong>
        <br />
        {moment(this.state.eventData.startTime).format("MMMM Do YYYY, h:mm a")}
        <br />
        {this.state.eventData.description}
        <br />
        <Link to="/">Home page</Link>
      </div>
    ) : null;
  }
}

export default EventDetails;
