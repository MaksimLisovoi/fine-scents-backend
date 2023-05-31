const app = require("./app");

const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT))
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });
