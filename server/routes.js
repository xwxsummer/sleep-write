const Post = require('./models/Post');

module.exports = function(app) {

 app.get('/', function(req, res){
  res.send('hello world')
})

app.post('/posts', function (req,res) {
  //posts是自定义的路径名，可以写任意的东西，但要与前端的axios的get请求中的路径中的名字相同
  console.log(req.body);
  var post = new Post()
  post.title = req.body.title;
  post.content = req.body.content;
  post.save(function(){
    console.log('post saved!');
    res.json({message:"操作成功了！"});
  });
})

app.get('/posts', function(req, res) {
  Post.find().exec(function(err, posts) {
    res.json({ posts: posts })
  });
});

 app.get('/posts/:id', function(req, res){
  Post.findById({_id:req.params.id}, function(err,post){
    res.json({post});
  })
})

  app.put('/posts/:id', function(req, res){
  Post.findOneAndUpdate({_id:req.params.id},req.body,function(err){
    if(err)res.status(500).json({error:"更新失败"})
  })
  res.send('update a post!');
})

  app.delete('/posts/:id', function(req, res){
    Post.findById({_id:req.params.id},function(err,post){
      if(err) return res.status(500).json({error:err.massage});
      post.remove(function(err){
        if(err) return res.status(500).json({error:err.massage});
        res.json({massage:"文章已经被删除了"})
      })
    })
  })
}
