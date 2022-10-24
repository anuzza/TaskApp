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

    const updatePromise = db
      .collection("users")
      .updateOne(
        {
          _id: new ObjectID("6355da6bbf5dee4a8eb7559a"),
        },
        {
          $inc: {
            age: 1,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
