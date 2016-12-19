var mongoose = require('mongoose');
var Schema = mongoose.Schema;//schema概要的意思

const PostSchema = new Schema(
  {
    title: { type: String },
    content:{type: String }
  }
);
//创建集合posts ，集合名首字母大写。
module.exports = mongoose.model('Post', PostSchema);//module模块的意思
//User会自动对应数据库中的 users 这个集合，
//如果这里是，Apple 那就会对应 apples 集合，
//如果这里是，Person 那就会对应 people 集合。
