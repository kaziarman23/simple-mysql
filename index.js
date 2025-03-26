const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT;
const db = require("./src/Configs/DB.Config");

// Router Paths
const HomeRoute = require("./src/Routers/Home.Route");

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/", HomeRoute);


// Server Listen
app.listen(port, () => {
  console.log(`Backend server is running on Port: ${port}`);
});
