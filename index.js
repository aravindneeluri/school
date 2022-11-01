const express = require('express')
const app = express()
const mongoose = require('mongoose')
const nodemon = require('nodemon')
const bodyparser = require('body-parser')
const schools = require('./routes/school')
const clas = require('./routes/class')
const students = require('./routes/students')
app.use(bodyparser.json())

app.get('/' , (req, res) => res.send('3k'))

app.use('/school', schools)
app.use('/school', clas )
app.use('/school', students)




mongoose.connect('mongodb://0.0.0.0:27017/school'); 
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully",db.name);
});

app.listen(3000, () => {console.log('Running at 3000')})