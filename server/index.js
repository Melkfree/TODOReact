const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const TodoTask = require("./models/TodoTask");
const routes = require("./routes");

const bodyParser = require('body-parser');

dotenv.config();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/static", express.static("./public"));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//connection to db

mongoose.connect(process.env.DB_CONNECT, (err) => {
    if (err) throw new Error(err)
    console.log("Connected to db!");
    app.listen(5000, () => console.log("Server Up and running"));
});

// view engine configuration
app.set('views', './views')
app.set("view engine", "ejs");

routes(app);

