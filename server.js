const express = require("express");
require("dotenv").config(); // for loading environment variables
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const users = require("./routes/api/users");

const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//Database Connect
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, { useUnifiedTopology: true })
.then(() => console.log("Mongo Connection successful"))
.catch(err => console.log("err"));

mongoose.set("useFindAndModify", false);
mongoose.Promise = global.Promise;

app.use(passport.initialize());
require("./middleware/passport")(passport);
app.use("/api/users/", require("./routes/api/users"));
app.use("/api/posts/", require("./routes/api/posts"));


//Port Connect
app.listen(5000, () => {
  console.log(`Server up and running on port 5000`);
});    