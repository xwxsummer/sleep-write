var mongoose = require('mongoose');
var Schema = mongoose.Schema;//schema概要的意思

const UserSchema = new Schema(
  {
    title: { type: String },
    content:{type: String }
  }
);

module.exports = mongoose.model('User', UserSchema);//module模块的意思
//User会自动对应数据库中的 users 这个集合，
//如果这里是，Apple 那就会对应 apples 集合，
//如果这里是，Person 那就会对应 people 集合。
