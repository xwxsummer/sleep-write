import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';


class New extends Component {
  constructor(){
    super()
    this.state={
      work:false
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({work:true})
    let title = this.refs.title.value;
    let content = this.refs.content.value;
    axios.post('http://localhost:6060/posts', {title, content})
         .then((res) =>{
           this.props.router.push('/')}
         )
         .catch((error) => console.log(error))
  }

  render(){

    return(
      <div className="form-wrapper">
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="field">
          <label className="label">标题</label>
          <input type='text' name="title" ref='title' />
        </div>
        <div className="field">
          <label className="label">内容</label>
          <textarea  ref='content' className="write-content"></textarea>
        </div>
        <div className="actions">
           <button type='submit' className="button" disabled={this.state.work}>提交</button>
           <Link to='/' className="cancel">取消</Link>
         </div>
      </form>
      </div>
    )
  }
}

export default New;
