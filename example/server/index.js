const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const events = [
  {
    id: 0,
    title: "Breakfast",
    startTime: new Date("December 17, 2018 10:00:00"),
    description: "Have a nice breakfast"
  },
  {
    id: 1,
    title: "Lunch",
    startTime: new Date("December 17, 2018 12:30:00"),
    description: "Have a healthy lunch"
  }
];

// respond with the list of events when a GET request is made to the homepage
app.get("/event/:id", function(req, res) {
  console.log(req.params.id);
  console.log(events.filter(event => event.id === +req.params.id));
  res.send(...events.filter(event => event.id === +req.params.id));
});
app.get("/", function(req, res) {
  res.send(events.map(event => event.id));
});

app.listen(4000, () => console.log("Listening on port 4000"));
