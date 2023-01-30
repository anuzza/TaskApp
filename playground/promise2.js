require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndRemove("6355fe2e89b511dde0bc50e4")
  .then(() => {
    console.log("done");
    return Task.countDocuments({ compeleted: false }).then((result) => {
      console.log(result);
    });
  })
  .catch((e) => {
    console.log(e);
  });
