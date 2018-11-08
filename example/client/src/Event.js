import moment from "moment";
import { Link } from "react-router-dom";
import axios from "axios";

import React, { Component } from "react";

class Event extends Component {
  constructor() {
    super();
    this.state = {};
  }
  async componentDidMount() {
    const eventData = (await axios.get(
      `http://localhost:4000/event/${this.props.id}`
    )).data;
    this.setState({ eventData });
  }

  render() {
    return this.state.eventData ? (
      <div>
        <Link to={`/event/${this.props.id}`}>
          <strong> {this.state.eventData.name}</strong>
        </Link>
        <br />
        {moment(this.state.eventData.startTime).format("MMMM Do YYYY, h:mm a")}
        <br />
      </div>
    ) : null;
  }
}

export default Event;
