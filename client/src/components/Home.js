import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import filter from 'lodash/fp/filter';
import DeletePost from './DeletePost';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      posts:[],
      id :''
    }
  }
  componentDidMount(){
    axios.get('http://localhost:6060/posts')
    .then(res=>this.setState({posts:res.data.posts}))
  }

   handleClick(value) {
     this.setState({id: value});
     this.refs.dialog.handleOpen();
  }

filterPosts(id){
   const posts = filter((post) => {
     return post._id !== id
   }, this.state.posts);

   this.setState({ posts: posts });
 }

  render(){
    return(
      <div>
        <Link to='/new' className='post-write'><div className="write">*写文章*</div></Link>
        <div>
          {this.state.posts.map((item,i)=>
            <div key={i} className='content-wrap'>
              <h3>{item.title}</h3>
              <p>{item.content.substr(0,17)}......</p>
              <div className="links">
              <Link to={`/posts/${item._id}`} className='post-card'>详情</Link>
              <Link to={`/edit/${item._id}`} title={item.title} content={item.content} className='post-card'>修改</Link>
              <Link to='' className='post-card delete-btn' onClick={this.handleClick.bind(this,item._id)}>删除</Link>
            </div>
            </div>
          )}
        </div>
        <DeletePost id={this.state.id} removePosts={this.filterPosts.bind(this)} ref='dialog' />
      </div>
    )
  }
}
export default Home;
