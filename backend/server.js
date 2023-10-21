// server.js is our entry file for the backend application where we register the express app
// requires .env
require("dotenv").config();

// requiring express package
const express = require("express");
const PORT = 3001;
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

// start the express app in a function that we invoke in this 'app' variable
const app = express();

// middleware
// express.json looks for body of req and parses it and attaches
// it to the (req) object so that we can access it in the req handler
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// basically grabs all the different routes that we've attached
// in the worokoutRoutes and attaches it to our express app
app.use("/api/workouts/", workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log("connected to db & server is running on ${PORT} !!");
    })
  })
  .catch((error) => {
    console.error(error);
  });

// represents the enviorment variable available to your app
// process.env;
