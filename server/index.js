const express = require('express')
const app = express()
app.use(express.static("public"));
let contactRoutes = require("")
app.use("/contacts", contactRoutes)
const bodyParser = require("body-parser");
app.use(bodyParser.json());
let mongoose = require("mongoose");
mongoose.connect(process.env.mongodburi, {useNewUrlParser: true});



const thePort = 3001
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});