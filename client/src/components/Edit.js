import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import axios from 'axios';

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      work:false,
      title :'',
      content :""
    }
  }
  componentWillMount(){
    axios.get(`http://localhost:6060/posts/${this.props.params.id}`)
    .then(res => this.setState({
      title:res.data.post.title,
      content:res.data.post.content
      })
    )
  }
  handleChange(e){
    this.setState({title:e.target.value})
  }
  handleChange1(e){
    this.setState({content:e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({work:true})
    let title = this.refs.title.value;
    let content = this.refs.content.value;
      console.log(title+content)
    axios.put(`http://localhost:6060/posts/${this.props.params.id}`, {title, content})
         .then((res) =>{
           console.log(res);
           alert("修改成功")
           this.props.router.push('/')}
         )
         .catch((error) => console.log(error))
  }
  render() {
    return (
      <div className="form-wrapper">
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="field">
          <label className="label">标题</label>
          <input type='text' name="title" ref='title' value={this.state.title}
             onChange={this.handleChange.bind(this)} />
        </div>
        <div className="field">
          <label className="label">内容</label>
          <textarea  ref='content' className="write-content" value={this.state.content}
            onChange={this.handleChange1.bind(this)} />
        </div>
        <div className="actions">
           <button type='submit' className="button" disabled={this.state.work}>修改提交</button>
           <Link to='/' className="cancel">取消修改</Link>
         </div>
      </form>
      </div>
    );
  }
}
