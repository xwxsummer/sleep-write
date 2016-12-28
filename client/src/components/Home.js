import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import filter from 'lodash/fp/filter';

class Home extends Component {
  constructor() {
    super();
    this.state={
      posts:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost:6060/posts')
    .then(res=>this.setState({posts:res.data.posts}))
  }
  handleClick(id) {
   console.log('handleClick.' + id);
   axios.delete(`http://localhost:6060/posts/${id}`)
   .then(this.filterPost(id))

 }
filterPost(id){
   const posts = filter((post) => {
     return post._id !== id
   }, this.state.data);

   this.setState({ data: posts });
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
              <div  className='post-card delete-btn' onClick={this.handleClick.bind(this,item._id)}>删除</div>
            </div>
            </div>
          )}
        </div>

      </div>
    )
  }
}
export default Home;
