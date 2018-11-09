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
  return collection.findOne({ _id: new mongodb.ObjectId(_id) });
}
async function createEvent(event) {
  const collection = await collectionPromise;
  return collection.insertOne(event);
}

// Homepage: list of events
app.get("/", async (req, res) => {
  const eventIds = await getEventIds();
  res.send(eventIds.map(d => d._id));
});
// Event details
app.get("/event/:id", async (req, res) => {
  const eventDetails = await getEventDetails(req.params.id);
  console.log(eventDetails);
  res.send(eventDetails);
});
app.post("/newEvent", async (req, res, next) => {
  // events.push({ ...req.body, id: nextId });
  // nextId += 1;
  const eventDetails = await createEvent(req.body);
  console.log(eventDetails);
  res.send(eventDetails);
});

app.listen(4000, () => console.log("Listening on port 4000"));
