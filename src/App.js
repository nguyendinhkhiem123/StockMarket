import React, { Component } from 'react';
import './assets/Js/main';
import './assets/css/base.css';
import './assets/css/reset.css';
import './assets/css/style.css';
import Header from './Component/Header';
import Table from './Component/Table';
class App extends Component {
  render() {
    return (
      <div>
          
             <Header></Header>
            {/* End header */}
            {/* Begin tabbed-content */}
             <Table></Table>
           
      </div>
    );
  }
}

export default App;