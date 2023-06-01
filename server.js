const app = require("./app");

const mongoose = require("mongoose");

const { DB_HOST, PORT} = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT))
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });
