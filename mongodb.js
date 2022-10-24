//CRUD Create Read Update Delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

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

    // db.collection("users").insertOne(
    //   {
    //     name: "Anuja",
    //     age: 19,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Stan",
    //       age: 25,
    //     },
    //     {
    //       name: "Jen",
    //       age: 35,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents");
    //     }

    //     console.log(result);
    //   }
    // );

    db.collection("tasks").insertMany(
      [
        {
          description: "Learn nodeJS",
          completed: false,
        },
        {
          description: "Learn Mongodb",
          completed: false,
        },
        {
          description: "Learn MERN",
          completed: false,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert tasks");
        }
        console.log(result);
      }
    );
  }
);
