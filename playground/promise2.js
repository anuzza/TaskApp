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

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndRemove(id);
  const count = Task.countDocuments({ compeleted: false });
  return count;
};

deleteTaskAndCount("6355fe2e89b511dde0bc50e4")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
