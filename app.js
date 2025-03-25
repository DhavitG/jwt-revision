require("dotenv").config();
const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middlewares
app.use(express.static("./public"));
app.use(express.json());

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5004;

const start = async () => {
  try {
    app.listen(port, `Server is running at port ${port}...`);
  } catch (e) {
    console.log(e);
  }
};

start();
