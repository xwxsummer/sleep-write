import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router';

class Home extends Component {
  constructor() {
    super();
    this.state={
      posts:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost:6060/posts')
    .then(res=>{this.setState({posts:res.data.posts});console.log(res.data.posts)})
  }
  render(){
    return(
      <div>
        {this.state.posts.map((item,i)=>
          <div key={i} className='content-wrap'>
            <h3>{item.title}</h3>
            <p>{item.content.substr(0,20)}......</p>
            <Link to='/'>查看</Link>
          </div>

        )}
      </div>
    )
  }
}
export default Home;
