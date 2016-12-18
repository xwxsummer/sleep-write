const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog');
var db=mongoose.connection;
db.once("open", function(){
    console.log('success database!');
})
app.post('/posts',function(req,res){
  console.log("sohdohdodhdoh")
})
app.get('/', function(req,res){
  console.log("sucesshhahahaahhah")
  res.send("hello world")
})
app.listen(6060, function () {
      console.log('Example app listening:6060');
});
