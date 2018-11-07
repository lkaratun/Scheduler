import React, { Component } from "react";
import Event from "./Event";


class EventList extends Component {
  constructor() {
    super();
    this.state = { events: [] };
  }

  async componentDidMount() {
    const eventList = await fetch("http://localhost:4000")
      .then(res => res.json())
      .catch(console.log);
    this.setState({ events: eventList });
  }

  openComponentDetails() {}

  render() {
    const eventComponents = this.state.events.map(event => (
      <Event data={event} key={event.id} />
    ));
    return <div>{eventComponents}</div>;
  }
}
export default EventList;
