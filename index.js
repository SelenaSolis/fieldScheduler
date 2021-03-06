require("dotenv").config();
const express = require('express');
let mongoose = require("mongoose");
const bodyParser = require("body-parser");
let coachRoutes = require('./server/routes/coachRoutes');
let teamRoutes = require('./server/routes/teamRoutes')
let fieldRoutes = require('./server/routes/fieldRoutes')

const app = express()

app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.connect(process.env.mongodburi, {useNewUrlParser: true})


app.use('/coaches', coachRoutes)
app.use('/teams', teamRoutes)
app.use('/fields', fieldRoutes)


const thePort = 3001
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});