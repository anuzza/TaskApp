const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://anuzza:anuja@cluster0.nv5zq7l.mongodb.net/task-manager-api",
  {}
);

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const me = new User({ name: "Anuja", age: 19 });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

const Task = new mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const task = new Task({ description: "Dry blanket", completed: false });

task.save()
  .then(() => {
    console.log(task);
  })
  .catch((error) => {
    console.log(error);
  });
