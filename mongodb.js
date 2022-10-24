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

    // db.collection("users").findOne(
    //   { _id: new ObjectID("6355da6bbf5dee4a8eb7559b") },
    //   (error, user) => {
    //     if (error) {
    //       console.log("Unable to fetch");
    //     }
    //     console.log(user);
    //   }
    // );

    db.collection("users")
      .find({ age: 35 })
      .toArray((error, users) => {
        console.log(users);
      });

    db.collection("users")
      .find({ age: 35 })
      .count((error, count) => {
        console.log(count);
      });
  }
);
