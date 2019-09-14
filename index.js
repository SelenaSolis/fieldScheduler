require("dotenv").config();
const express = require('express')
const app = express()
app.use(express.static("public"));
const bodyParser = require("body-parser");
app.use(bodyParser.json());
let mongoose = require("mongoose");
mongoose.connect(process.env.mongodburi, {useNewUrlParser: true})
let coachRoutes = require('./server/routes/coachRoutes')

app.use('/coaches', coachRoutes)



const thePort = 3001
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});