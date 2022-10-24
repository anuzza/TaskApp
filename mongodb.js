//CRUD Create Read Update Delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL =
  "mongodb+srv://anuzza:anuja@cluster0.nv5zq7l.mongodb.net/?retryWrites=true&w=majority";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    const db = client.db(databaseName);

    db.collection("users")
      .deleteMany({ age: 26 })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    db.collection("tasks")
      .deleteOne({ description: "Learn MERN" })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
