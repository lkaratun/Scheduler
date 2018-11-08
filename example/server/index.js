const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let nextId = 2;
const events = [
  {
    id: 0,
    name: "Breakfast",
    startTime: new Date("December 17, 2018 10:00:00"),
    description: "Have a nice breakfast"
  },
  {
    id: 1,
    name: "Lunch",
    startTime: new Date("December 17, 2018 12:30:00"),
    description: "Have a healthy lunch"
  }
];

// Homepage: list of events
app.get("/", function(req, res) {
  res.send(events.map(event => event.id));
});
// Event details
app.get("/event/:id", function(req, res) {
  res.send(...events.filter(event => event.id === +req.params.id));
});
app.post("/newEvent", function(req, res, next) {
  events.push({ ...req.body, id: nextId });
  nextId += 1;
  res.send(req.body);
});

app.listen(4000, () => console.log("Listening on port 4000"));
