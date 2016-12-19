const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());//允许第三方访问

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog');
var db=mongoose.connection;
db.on('error',console.log)
db.once("open", function(){
    console.log('success database!');
})//连接数据库

const bodyParser = require('body-parser');//body()解析插件，Parser--意思是解析器;
app.use(bodyParser.json()); // 解析axios传过来的”Content-Type:application/json“格式数据
app.use(bodyParser.urlencoded({ extended: true }));//解析form表单传过来的”Content-Type: application/x-www-form-urlencoded”
//extended的属性值有两个，true：any type 可以接受任何数据类型的数据，flase：string or array只能接收字符串和数组

const routes = require('./routes');
routes(app);


app.listen(6060 , function(){
  console.log('running on port 6060....');
});
