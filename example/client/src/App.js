import React, { Component } from "react";
import EventList from "./EventList";
import EventDetails from "./EventDetails";
import "./App.css";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={EventList} />
          <Route path="/event/:id" component={EventDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
