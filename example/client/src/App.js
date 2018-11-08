import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import EventList from "./EventList";
import NewEvent from "./NewEvent";
import EventDetails from "./EventDetails";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={EventList} />
          <Route path="/event/:id" component={EventDetails} />
          <Route path="/newEvent" component={NewEvent} />
        </Switch>
      </div>
    );
  }
}

export default App;
