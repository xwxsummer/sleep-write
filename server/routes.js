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
  });
})

app.get('/posts', function(req, res) {
  Post.find().exec(function(err, posts) {
    res.json({ posts: posts })
    /*  let ss = titles.map(item =>item.title) ;
      console.log(ss);
      res.json(ss);
    */
  });
});

app.get('/posts/:id', function(req, res){
  Post.findById({_id:req.params.id}, function(err,post){
    res.json({post});
  })
})

app.put('/posts/:id', function(req, res){
  res.send('update a post!');
})

app.delete('/posts/:id', function(req, res){
  res.send('delete a post!');
})

}
