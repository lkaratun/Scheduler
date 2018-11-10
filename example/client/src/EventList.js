import React, { Component } from "react";
import { Link } from "react-router-dom";
import Event from "./Event";
import "./EventList.css";

class EventList extends Component {
  constructor() {
    super();
    this.state = { eventIds: [] };
  }

  async componentDidMount() {
    const eventIds = await fetch("http://levkaratun.com:4000")
      .then(res => res.json())
      .catch(console.log);
    this.setState({ eventIds });
  }

  openComponentDetails() {}

  render() {
    const eventComponents = this.state.eventIds.map(id => (
      <Event id={id} key={id} />
    ));
    return (
      <div>
        <h3>Existing events:</h3>
        {eventComponents}
        <button className="new-event">
          <Link to="/newEvent" className="new-event">New event</Link>
        </button>
      </div>
    );
  }
}
export default EventList;
