const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

//without middleware: new req-> run route handler
//with middleware: new req-> do something -> run route handler

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "thisismytoken", {
//     expiresIn: "7 days",
//   });
//   console.log(token);
//   const data = jwt.verify(token, "thisismytoken");
//   console.log(data);
// };

// myFunction();

// const pet = {
//   name: "Hal",
// };

// pet.toJSON = function () {
//   console.log(this);
//   return this;
// };
// console.log(JSON.stringify(pet));
