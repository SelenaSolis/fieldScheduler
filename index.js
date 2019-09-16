require("dotenv").config();
const express = require('express');
let mongoose = require("mongoose");
const bodyParser = require("body-parser");
let coachRoutes = require('./server/routes/coachRoutes');

const app = express()

app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.connect(process.env.mongodburi, {useNewUrlParser: true})


app.use('/coaches', coachRoutes)



const thePort = 3001
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});