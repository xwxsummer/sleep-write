import React, { Component } from 'react';
import {Link} from 'react-router';

class App extends Component {
  render(){
    let styles={
      textDecoration:'none'
    }
    return(
      <div className="maxBig-wrap">
      <Link to='/' style={styles}>  <div className="header">NOTEBOOK</div></Link>
        <div className="contents">
          {this.props.children} {/*router中带的props属性*/}
        </div>
        <div className="footer">The harder the more fortunate</div>
      </div>
    )
  }
}

export default App;
