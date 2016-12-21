var express = require('express');
var app = express();

app.use(express.static('public'));
// 用跟本文件平级的一个 public 夹作为静态文件的存放位置
// 没有这一行，后面 sendFile 的 index.html 就找不到了。

app.get('*', function(req, res){
  res.sendFile('index.html',{root:'public'});
});

app.listen(3000, function(err) {
  console.log('Listening at http://localhost:3000');
});
