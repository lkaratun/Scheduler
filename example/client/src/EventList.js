import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
  constructor() {
    super();
    this.state = { eventIds: [] };
  }

  async componentDidMount() {
    const eventIds = await fetch("http://localhost:4000")
      .then(res => res.json())
      .catch(console.log);
    this.setState({ eventIds });
  }

  openComponentDetails() {}

  render() {
    const eventComponents = this.state.eventIds.map(id => (
      <Event id={id} key={id} />
    ));
    return <div>{eventComponents}</div>;
  }
}
export default EventList;
