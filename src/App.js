import React, { Component } from 'react';
import WebUnderConstruction from './component/assets/website_under_construction.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="andrei_melo_header"></div>
      <div className="andrei_melo_container">
      <img src={WebUnderConstruction} className="web_image_size" />
      </div>
      </div>
    );
  }
}

export default App;

// wowo/