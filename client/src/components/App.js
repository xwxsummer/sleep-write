import React, { Component } from 'react';
import {Link} from 'react-router';

class App extends Component {
  render(){
    return(
      <div className="maxBig-wrap">
        <div className="header">NOTEBOOK</div>
        <div className="contents">
          {this.props.children} {/*router中带的props属性*/}
        </div>
        <div className="footer">The harder the more fortunate</div>
      </div>
    )
  }
}

export default App;
