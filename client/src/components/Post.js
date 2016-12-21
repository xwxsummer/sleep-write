import React, {PropTypes} from 'react';
import axios from 'axios';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title :'',
      content :""
    }
  }
componentDidMount(){
  axios.get(`http://localhost:6060/posts/${this.props.params.id}`)
  .then(res => this.setState({
    title:res.data.post.title,
    content:res.data.post.content
    })
  )
}
  render() {
    return (
      <div className="details">
        <h1>{this.state.title}</h1>
        <p>
          {this.state.content}
       </p>
      </div>);
  }
}

Post.propTypes = {
};
