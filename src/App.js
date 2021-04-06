import React, { Component } from 'react';
import './App.css';
import PropsComponent from './03/PropsComponent';
import ChildComponent from './03/ChildComponent';
import StateExample from './03/StateExample';
import ForceUpdateExample from './03/ForceUpdateExample';

class App extends Component {
  render() {
    return (
      <div className="title">
        <PropsComponent name="hello" />
        <ChildComponent 
          requiredStringValue="required value"
          objValue={{name:'test', age:12}} />
        <StateExample />
        <ForceUpdateExample />
      </div>
    );
  }
}

export default App;
