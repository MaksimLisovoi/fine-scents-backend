const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/api/auth");
const productsRouter = require("./routes/api/products");
const applyingRouter = require("./routes/api/applyingTypes");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);
app.use("/api/applying", applyingRouter);

app.use((req, res) => {
  res.status(404).json({ status: "error", code: 404, message: "Not found" });
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res
    .status(status)
    .json({ status: "fail", code: status, message: err.message });
});

module.exports = app;

// const express = require("express");
// const moment = require("moment");
// const fs = require("fs/promises");
// const cors = require("cors");

// const contacts = require("./model/contacts.json");

// const app = express();

// const corsMiddleware = cors();

// app.use(corsMiddleware);

// app.use(async (req, res, next) => {
//   const { method, url } = req;
//   const date = moment().format("DD-MM-YYYY_hh:mm:ss");

//   await fs.appendFile("./public/server.log", `\n${method} ${url} ${date}`);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("This is middleware!");
//   next();
// });

// app.get("/contacts", (req, res) => {
//   res.json(contacts);
// });

// app.get("/products", (req, res) => {
//   res.json([]);
// });

// app.listen(3000);
