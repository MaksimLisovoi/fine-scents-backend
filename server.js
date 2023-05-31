const app = require("./app");

const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const DB_HOST =
  "mongodb+srv://Maksim:sBw1CR6ePLbtgbFz@cluster0.wwe6ykf.mongodb.net/fine-scents-db?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT))
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });
