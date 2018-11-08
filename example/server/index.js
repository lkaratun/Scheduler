const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
require("dotenv").load();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function setUpDBConnection() {
  const dbUrl = `mongodb+srv://${process.env.dbUserName}:${
    process.env.dbPassword
  }@cluster0-624uz.mongodb.net/test?retryWrites=true`;
  return MongoClient.connect(dbUrl)
    .then(client => client.db("scheduling").collection("events"))
    .catch(err => console.log(err));
}
const collectionPromise = setUpDBConnection();

async function getEventIds() {
  const collection = await collectionPromise;
  const projection = { _id: 1 };
  return collection.find({}, { projection }).toArray();
}
async function getEventDetails(_id) {
  const collection = await collectionPromise;
  return await collection.findOne({ _id: new mongodb.ObjectId(_id) });
}

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
app.get("/", async (req, res) => {
  const eventIds = await getEventIds();
  console.log(eventIds.map(d => d._id));
  res.send(eventIds.map(d => d._id));
});
// Event details
app.get("/event/:id", async (req, res) => {
  const eventDetails = await getEventDetails(req.params.id);
  console.log(eventDetails);
  res.send(eventDetails);
  // res.send(...events.filter(event => event.id === +req.params.id));
});
app.post("/newEvent", function(req, res, next) {
  events.push({ ...req.body, id: nextId });
  nextId += 1;
  res.send(req.body);
});

app.listen(4000, () => console.log("Listening on port 4000"));
