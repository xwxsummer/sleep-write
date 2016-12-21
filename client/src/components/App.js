import React, { Component } from 'react';
import {Link} from 'react-router';

class App extends Component {
  render(){
    return(
      <div>
        <div className='header'>Bolg</div>
        {this.props.children}
      </div>
    )
  }
}

export default App;
