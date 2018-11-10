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
      `http://levkaratun.com:4000/event/${this.props.id}`
    )).data;
    this.setState({ eventData });
  }

  render() {
    return this.state.eventData ? (
      <div>
        <Link to={`/event/${this.props.id}`}>
          <strong>{this.state.eventData.name}</strong>
        </Link>
        &nbsp;
        ({this.state.eventData.startTime})
        <br />
      </div>
    ) : null;
  }
}

export default Event;
