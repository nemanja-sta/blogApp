const express = require('express');
const router = express.Router;
require("dotenv").config(); // for loading environment variables
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post("/user", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.use("/api/users/", require("./routes/api/user"));

//Database Connect
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, { useUnifiedTopology: true })
.then(() => console.log("Mongo Connection successful"))
.catch(err => console.log("err"));

//Port Connect
app.listen(5000, () => {
  console.log(`Server up and running on port 5000`);
});    