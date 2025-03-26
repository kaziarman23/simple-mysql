const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT;

// Database Import
require("./src/Configs/DB.Config")

// Router Paths
const HomeRoute = require("./src/Routers/Home.Route");
const UserRoute = require("./src/Routers/User.Route");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", HomeRoute);
app.use("/user", UserRoute);

// Server Listen
app.listen(port, () => {
  console.log(`Backend server is running on Port: ${port}`);
});
