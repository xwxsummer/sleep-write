### 仓库创建

- 在github上创建一仓库：sleep-write
- 在本地创建一个同名仓库，具体步骤如下：

```
mkdir README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:xwxsummer/sleep-write.git
git push -u origin master

```

### 添加项目文件夹

```
mkdir client 客户端
mkdir server 服务器端
```

#### 1.到server文件夹之内，来创建一个基本的 express 的骨架

- 创建index.js文件

```
const express = require('express');
const app = express();

app.get('/', function(req,res){
    console.log("success")
    res.send("hello world")
  })

app.listen(6060, function () {
        console.log('Example app listening:6060');
  });

```
- `npm init -y`  创建`package.json`文件
- `npm i`  创建`node_modules`
- 启动后台项目 **node index.js**,重新打开一个窗口，模拟前台请求 **curl localhost:6060** ,如果在后台打印出了 **success**
  并且在模拟前台打印出了 **hello world**说明
  基本后台骨架已经创建成功了！

### 用 nodemon 避免每次修改后台代码后需要重新启动的问题

```
npm i -g nodemon
```

`g` 是 `--global`的缩写，意思是全局安装，全局安装有两个好处：

- 第一个是所有项目都可以公用
- 第二个是全局安装的包，之中的命令会自动导出，也就是系统任意位置都可以使用。
- 如果是局部安装的，执行 `nodemon` 这个命令就会报错 `Command Not Found`

### 数据库连接 使用 mongodb
- 安装 mongoose,`npm i -D mongoose`
- `index.js`中增加如下代码：

```
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;//去掉警告信息！引入一个es6自带的Promise插件
mongoose.connect('mongodb://localhost:27017/blog');//blog为数据库名，执行此行代码之前要保证mongodb数据库已经运行在27017端口了（即启动成功了数据库）
var db=mongoose.connection;
db.on(error,console.log)//如果连接有错误，以console.log的方式大一出错误
db.once("open", function(){
    console.log('database content success!');
})
```
连接数据库成功以后会在命令行打印出`database content success`

```
curl -H 'Content-Type: application/json' -X POST -d '{"title":"Hello", "content": "hello content"}' localhost:6060/posts
```
### 创建数据库模型 modles/User.js
    `js文件名一定要使用单数，取名方式多是使用数据库集合的名字`

```
var mongoose = require('mongoose');
var Schema = mongoose.Schema;//schema概要的意思

const UserSchema = new Schema(
  {
    title: { type: String },
    content:{type: String }
  }
);
//创建集合users ，集合名首字母大写。不需要进入数据库手动创建。
module.exports = mongoose.model('User', UserSchema);//module模块的意思
//User会自动对应数据库中的 users 这个集合，
//如果这里是，Apple 那就会对应 apples 集合，
//如果这里是，Person 那就会对应 people 集合。
```
