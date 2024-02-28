const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const ApiRoutes = require("./src/routes/routes");

const PORT = 4000; // Used Constant instead of environment variable for this project

const startServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use("/api", ApiRoutes);
  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
  });
};

startServer();
